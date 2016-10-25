<?php
// code gốc được chia sẻ tại
// http://sinhvienit.net/forum/code-get-link-google-drive-t10.469282.html#post2300835
// Hướng dẫn của bác marxvn
// Thư mục tmp nhớ chmod 0777
error_reporting(E_ERROR | E_PARSE);
$url = urldecode($_GET['url']);

class gdrive
{
    protected $folder;
    protected $path;
    protected $url;
    protected $itag = array(
        37,
        22,
        59,
        18
    );

     protected $vidcode = array(
         //2D Non-DASH
        '18'    => '360',
        '59'    => '480',
        '22'    => '720',
        '37'    => '1080',
        //3D Non-DASH
        '82'    => '360',
        '83'    => '240',
        '84'    => '720',
        '85'    => '1080'
    );

    public function __construct($folder='')
    {
        $this->folder = $this->createPath($folder);
    }

    public function setItag($itags)
    {
        if(is_array($itags)) array_merge($this->itag, $itags);
    }

    public function setVidcode($vidcode)
    {
        if(is_array($vidcode)) array_merge($this->vidcode, $vidcode);
    }

    public function getLink($url)
    {
        $id = $this->getDriveId($url);
        if($id){

            $headers = $this->getHeaders();

            if ($headers['http_code'] === 200 and $headers['download_content_length'] < 1024*1024 and $this->download()) {
                
                unset($headers);
                $file = fopen($this->path, "r") or die("Unable to open file!");
                $body = fgets($file);

                if(strpos($body,'status=fail') !== false ) return false;

                $fmt = $this->fetchValue(urldecode($body), 'fmt_stream_map=','&fmt_list');

                $urls = explode(',', $fmt);
                $source = array();
                foreach ($urls as $url) {
                    list($itag,$link) = explode('|', $url);
                    if(in_array($itag, $this->itag)){
                        if($itag == 37) {
                            $source    .= '{type: "mp4", label: "1080p", file: "'.preg_replace("/\/[^\/]+\.google\.com/","/redirector.googlevideo.com",$link).'?title=FULLHD/1080p"},';}
                            if($itag == 22) {$source    .= '{type: "mp4", label: "720p", file: "'.preg_replace("/[^\/]+\.googlevideo\.com/","redirector.googlevideo.com",$link).'?title=HD/720p"},';}
                            if($itag == 59) {$source    .= '{type: "mp4", label: "480p", file: "'.preg_replace("/\/[^\/]+\.google\.com/","/redirector.googlevideo.com",$link).'?title=SD/480p"},';}
                            if($itag == 18) {$source    .= '{type: "mp4", label: "360p", file: "'.preg_replace("/\/[^\/]+\.google\.com/","/redirector.googlevideo.com",$link).'?title=SD/360p", "default": "true"},';}                        
                        }
                }
                @unlink($this->path);
                return $source;
            }    
        }
        return false;
    }

    private function getDriveId($url)
    {
        preg_match('/(?:https?:\/\/)?(?:[\w\-]+\.)*(?:drive|docs)\.google\.com\/(?:(?:folderview|open|uc)\?(?:[\w\-\%]+=[\w\-\%]*&)*id=|(?:folder|file|document|presentation)\/d\/|spreadsheet\/ccc\?(?:[\w\-\%]+=[\w\-\%]*&)*key=)([\w\-]{28,})/i', $url , $match);

        if(isset($match[1])){
            $id = $match[1];
            $this->url = sprintf('https://docs.google.com/get_video_info?docid=%s', $id);
            $this->path = $this->folder . $id;

            return $id;
        }
        
        return false;
    }

    private function createPath($folder)
    {
        if (is_dir($folder)) return $folder;
        $prev_path = substr($folder, 0, strrpos($folder, '/', -2) + 1 );
        $return = $this->createPath($prev_path);
        return ($return && is_writable($prev_path)) ? mkdir($folder, 0777) : false;
    }

    private function getHeaders()
    {
        $ch = curl_init($this->url);
        curl_setopt( $ch, CURLOPT_NOBODY, true );
        curl_setopt( $ch, CURLOPT_RETURNTRANSFER, false );
        curl_setopt( $ch, CURLOPT_HEADER, false );
        curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, true );
        curl_setopt( $ch, CURLOPT_MAXREDIRS, 3 );
        curl_setopt( $ch, CURLOPT_SSL_VERIFYPEER, false );
        curl_exec( $ch );
        $headers = curl_getinfo( $ch );
        curl_close( $ch );

        return $headers;
    }

    private function download()
    {
        $fp = fopen($this->path, 'w+');
        $ch = curl_init();
        curl_setopt( $ch, CURLOPT_URL, $this->url );
        curl_setopt( $ch, CURLOPT_RETURNTRANSFER, false );
        curl_setopt( $ch, CURLOPT_BINARYTRANSFER, true );
        curl_setopt( $ch, CURLOPT_SSL_VERIFYPEER, false );
        curl_setopt( $ch, CURLOPT_CONNECTTIMEOUT, 50 );
        curl_setopt( $ch, CURLOPT_FILE, $fp );
        curl_exec( $ch );
        curl_close( $ch );
        fclose( $fp );

        if (filesize($this->path) > 0) return true;
    }

    private function fetchValue($str, $find_start, $find_end)
    {
        $start = stripos($str, $find_start);

        if($start==false) return '';

        $length = strlen($find_start);
        $end = stripos(substr($str, $start+$length), $find_end);
        return trim(substr($str, $start+$length, $end));
    }
}
$destination = __DIR__ . '/tmp/';

$drive = new gdrive($destination);
echo "<div>
<center><script src='//content.jwplatform.com/libraries/PCOqVnbB.js'></script>
    <div id='player'><div class='fixed-background'><img src='http://server-vietsubhd.rhcloud.com/loading.gif' height='100%' width='100%'></div></div>
    <script type='text/javascript'>
        jwplayer.key='ANSWlVRzOwTei4A6u8jhkh2/YPa5lMM7lZAABw==';
         var playerInstance = jwplayer(player);
      playerInstance.setup({
            sources: [".str_replace( 'Array', '', $drive->getLink($url) )."],
            image: '/wp-content/uploads/2015/12/giangsinh.png',
            width: '100%',
            height: '100%',
            aspectratio: '16:9',
            fullscreen: 'true', 
            autostart: 'true',
                
        });
         playerInstance.addButton(
   'http://demo.tutorialspots.com/jwplayer/icon-download.png',
   'Nhấn vào đây để tải video này', 
   function() {
              
    window.open(playerInstance.getPlaylistItem()['sources'][playerInstance.getCurrentQuality()].file+'?type=video/mp4&title=Taiphim', '_blank').blur();
   //window.location.href = playerInstance.getPlaylistItem()[‘sources’][playerInstance.getCurrentQuality()].file;
 },
'download'
);
    </script></center>
</div>";
?>