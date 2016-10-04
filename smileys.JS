/* Yahoo! Smileys For Blogger Threaded Comments
// ---------------------------------------------------
// BLOGTOC
// ---------------------------------------------------
// Author: Tai lieu mien phi
// Url: http://www.123tailieufree.com/
// Version: 2
// Date: 2007-04-12
// ---------------------------------------------------
// Thu thuat blog 
// http://www.windows2it.com/
// Date : 02-08-2011
// global arrays
 */
a = document.getElementById('comment-holder');
if (a) {
	b = a.getElementsByTagName("p");
	for (i = 0; i < b.length; i++) {
		if (b.item(i).getAttribute('CLASS') == 'comment-content') {
			bh_b_smly = b.item(i).innerHTML.replace(/:\)\)/gi, "<img src='https://1.bp.blogspot.com/-JPJOZUyAGJc/V-9FeM0QL6I/AAAAAAAAcHE/LFPhueTbqrY5Bwx2vjTZHeZutOhiOaRdACEw/s1600/21.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/O:-\)/gi, "<img src='https://4.bp.blogspot.com/-DkJkyZxdRlg/V-9Fu3bWurI/AAAAAAAAcHQ/HnNfSqxvxRUAeZigN6dwesJkED7oK9IMgCEw/s1600/25.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:-bd/gi, "<img src='https://1.bp.blogspot.com/-OGY0ldMmRv0/V-9GKtg515I/AAAAAAAAcHM/E3aIgM7RszskjIHm9xwncDwCtIDrz0xKACLcB/s1600/113.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/7:\)/gi, "<img src='https://3.bp.blogspot.com/-W6uA3lxf4nA/V-9Gn4Vn9II/AAAAAAAAcHU/jLNo-8BwCqo3NdOROOnJ3No77XFzGk6MQCLcB/s1600/19.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/2\):\)/gi, "<img src='https://3.bp.blogspot.com/-iC47pnanmbo/V-9G9K39gdI/AAAAAAAAcHc/g25mmrNp2XoMdVl6ORlP3ZEoVDb5g3O9ACLcB/s1600/48.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:\)\]/gi, "<img src='https://3.bp.blogspot.com/-i1Hj36e2Bvs/V-9HKtSm_YI/AAAAAAAAcHk/BcTDhFrXt0QL0NZOq1-drbD-FLiBrmitQCLcB/s1600/100.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:\(\(/gi, "<img src='https://2.bp.blogspot.com/-z3eBXNI1zWI/V-9HqhaVOwI/AAAAAAAAcHs/aLTKzjsAy006PwZp84Xys15Izge2Dy9OwCLcB/s1600/20.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:\(/gi, "<img src='https://3.bp.blogspot.com/-u0G_9pvacm0/V-9HzgcYT_I/AAAAAAAAcH0/WGZMX5TqTiAuoz9U1qWZtV1f8RU5UZKnQCLcB/s1600/2.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/\;\)/gi, "<img src='https://3.bp.blogspot.com/-BVpczX3Qj9Q/V-9IRhXm6NI/AAAAAAAAcH4/h87OBI95d3Qj4E-kxcfLt_EAZibsymdxQCLcB/s1600/3.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:D/gi, "<img src='https://1.bp.blogspot.com/-_tiuHBesP1o/V-9Id_9ff9I/AAAAAAAAcIA/L3ufL0xyIk8J02f18W_mPUpFFYCi9BpSACLcB/s1600/4.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/\;\;-\)/gi, "<img src='https://1.bp.blogspot.com/-SJEXqd1KaKA/V-9IsukqwtI/AAAAAAAAcIE/EWcht86SM2gyPTzZogikxpoM0mqTpdJTACLcB/s1600/5.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/7:\P/gi, "<img src='https://4.bp.blogspot.com/-en4IFQ-PjEk/V-9I7PhBnNI/AAAAAAAAcIQ/X1n1RvwFAo8mTINTuA5Uf5wktEYQRpXigCLcB/s1600/47.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/~\X\(/gi, "<img src='https://4.bp.blogspot.com/-OaJHUv-6-QU/V-9JG6d9r3I/AAAAAAAAcIU/xodyqFUpcZQgvezytoVnNJbxkHBbvXPiwCLcB/s1600/102.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:-\//gi, "<img src='https://2.bp.blogspot.com/-wX70tglQ6B4/V-9JoajQ05I/AAAAAAAAcIs/G8yVvOnub54nghQaN-hiWgFbbH9xp_YfgCEw/s1600/7.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/\/:\)/gi, "<img src='https://3.bp.blogspot.com/-SRD8dn3okOY/V-9Jxzp4yxI/AAAAAAAAcIs/xHCmJk6UA9k-wBG41VNrjUw8C8_7Il3eQCEw/s1600/23.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:x/gi, "<img src='https://1.bp.blogspot.com/-wBKXOwdCATY/V-9K3Qxw99I/AAAAAAAAcJA/4wshH8lgX-odWnjqKrxwBzA_r9wpHWXYQCEw/s1600/8.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:\P/gi, "<img src='https://3.bp.blogspot.com/-GeKiMGp1JHg/V-9LC5IjuNI/AAAAAAAAcJI/ffGks8LwjIgJ2BDA_URcIGJNHZYhhmLIACEw/s1600/10.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:-\*/gi, "<img src='https://4.bp.blogspot.com/-L2ZfAx0a47I/V-9LN5kUPJI/AAAAAAAAcJI/ohu--c-8dQoPC0VPgNiwa5FxOXxIo7blQCEw/s1600/11.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/=\(\(/gi, "<img src='https://1.bp.blogspot.com/-eU3Xz-P_OSw/V-9MyK_u5vI/AAAAAAAAcJU/jVcFeViD2e0eqwj0e9RXKFMZZBGi6y9gwCLcB/s1600/12.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:-\S\S/gi, "<img src='https://1.bp.blogspot.com/-6HXeij3wKrc/V-9LkWWavRI/AAAAAAAAcJQ/2fkpE2_TtVkBuklMTGpI8EPZ1Yx1u7JIACEw/s1600/42.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:-\O/gi, "<img src='https://3.bp.blogspot.com/-OOLIpd0YitU/V-9OD4QK2dI/AAAAAAAAcJo/Jarcj9rHg5g6tx5kr3885FCLMtkEnUJxwCEw/s1600/13.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/\X\(/gi, "<img src='https://4.bp.blogspot.com/-Nr_Vym4MoI4/V-9OD0vaa-I/AAAAAAAAcJk/rIXxBSUImOE_egjzJn2VEIYt0VP9AxHOACEw/s1600/14.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/B-\)/gi, "<img src='https://1.bp.blogspot.com/-UFPltTODGnE/V-9OD9ZzGLI/AAAAAAAAcJg/Wdo8EUVMjnYZ52GMW7qnafHxYOBsuiPfgCEw/s1600/16.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/\#:-\S/gi, "<img src='https://3.bp.blogspot.com/--KMg7ioNEr8/V-9OEV2XchI/AAAAAAAAcJs/rCwqmSt6iqcdZ6_QrNNqYuPZ_uIYY2dBgCEw/s1600/18.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:-S/gi, "<img src='https://2.bp.blogspot.com/-ZHIssXVsjSI/V-9O6lsKtuI/AAAAAAAAcJ8/88ZckWeGodwkM2PpMYNAgcYUTCfkcM-egCEw/s1600/17.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:7/gi, "<img src='https://2.bp.blogspot.com/-GI48qAXvc2M/V-9O6cTGKJI/AAAAAAAAcJ4/vOaDQRqJg8gzDfMna__l3xdyzkpIwJcRACEw/s1600/15.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:\)/gi, "<img src='https://1.bp.blogspot.com/-LRa5OIYhQRU/V-9O6kPhtuI/AAAAAAAAcJ0/1-eHcia_g6QvPBfXMMbbLXm7OsYv23S2QCEw/s1600/1.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/\(:\|/gi, "<img src='https://2.bp.blogspot.com/-W0-qSc7Bh9s/V_OGuZ1xy1I/AAAAAAAAcPU/d7zQlUW0keEp6Pa7AJHXvoCB9c2E7Hg4gCLcB/s1600/37.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:\|/gi, "<img src='https://2.bp.blogspot.com/-bX0s_gwc_Ns/V_OIZAQhuhI/AAAAAAAAcPw/bUCq_yXy4ck2SsvS29WHvKF0Ei4-AcD2ACLcB/s1600/22.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/=\)\)/gi, "<img src='https://2.bp.blogspot.com/-WI-OtsqmnYo/V_OIZYapVsI/AAAAAAAAcP0/8YgqmbVk_XUATuowEYIo3hoON4OwQwuwgCLcB/s1600/24.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:-B/gi, "<img src='https://4.bp.blogspot.com/-UnC12pc8Wsg/V_OIZtzLptI/AAAAAAAAcP4/gBdH9bLRIB8wOSksykAK-T_vdgo9mLhyACLcB/s1600/26.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/=\;/gi, "<img src='https://2.bp.blogspot.com/-Cq8ySBpt65g/V_OIZk8Y6JI/AAAAAAAAcP8/C1btST_0wB0V8-atn-HgYBtp5vdcIpOoACLcB/s1600/27.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:-c/gi, "<img src='https://4.bp.blogspot.com/-OmUnCGhw-dA/V_OIYzOLMhI/AAAAAAAAcPg/jGbijb6aPIs2CwceKcrYy1PNbv_d8UvnwCLcB/s1600/101.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:-h/gi, "<img src='https://2.bp.blogspot.com/-gIBoR711gxg/V_OIY7te10I/AAAAAAAAcPo/1jDNhxd5-qYFHH75Wtre3BLGhAdFc9-0gCLcB/s1600/103.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:-t/gi, "<img src='https://3.bp.blogspot.com/-jng6BJ7f0Hw/V_OIYy72v1I/AAAAAAAAcPk/xFjfr0Axlrk_-HbbOhw18cNELwM6zr61gCLcB/s1600/104.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/8-7/gi, "<img src='https://1.bp.blogspot.com/-IweS9bAefoY/V_OIZOzkdTI/AAAAAAAAcPs/l4z_x7TErFUXAoNdJyPhuZAwMacLlGbOQCLcB/s1600/105.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/\I-\)/gi, "<img src='https://1.bp.blogspot.com/-JAE4txGtwo4/V_OKYh1gqtI/AAAAAAAAcQM/gXo1WsK4QXAob2k-3bVYO15HGAWsU0l-gCLcB/s1600/28.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/8-\|/gi, "<img src='https://4.bp.blogspot.com/-5eaE9CZ7NlA/V_OKYibYaUI/AAAAAAAAcQI/Vp1jDuB-Gs4YTz0UStg5n-sHWdaIx9hFgCLcB/s1600/29%2B1.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/\L-\)/gi, "<img src='https://3.bp.blogspot.com/-iNMvpNjVpAs/V_OKYhG5AYI/AAAAAAAAcQQ/IOP7miNl6scrz0esCBLCYM3Gb_6uIdAZwCLcB/s1600/29.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:-a/gi, "<img src='https://2.bp.blogspot.com/-OuQfIAtUDrY/V_OKZPteJ8I/AAAAAAAAcQU/cmel3EcNmM0zNfNQwOEICnVdWCqMFMiNQCLcB/s1600/31.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:-\$/gi, "<img src='https://4.bp.blogspot.com/-Vu_TKeslHug/V_OKZMJhIaI/AAAAAAAAcQY/A3F0mUt7yTYDWch5FRqijOHmAxpQt7CUQCLcB/s1600/32.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/\[-\(/gi, "<img src='https://3.bp.blogspot.com/-blnWajxWH0w/V_OKZP2ihmI/AAAAAAAAcQc/IN9QNGwHsrsgRUDaQ8byPcOz2w0E9eWvgCLcB/s1600/33.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:\O\)/gi, "<img src='https://4.bp.blogspot.com/-D8OouoEXu08/V_OKZZt8pGI/AAAAAAAAcQg/OrARucvTq3YggdU0QTYs4B40uIoXHAv3wCLcB/s1600/34.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/8-\}/gi, "<img src='https://2.bp.blogspot.com/-Fwh8bd7nVd4/V_OKZswT27I/AAAAAAAAcQk/st8QJpK4ENQVsD5jsNp7vut5d0N733WVgCLcB/s1600/35.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/2:-\P/gi, "<img src='https://4.bp.blogspot.com/-OYM06-n0OaI/V_OOfc1NxYI/AAAAAAAAcQ0/9cuCjDZu5EMgKDH5h4NE4q5H2jBTNVnxACLcB/s1600/36.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/=\P~/gi, "<img src='https://3.bp.blogspot.com/-BxYSS19JKNU/V_OOfVICTRI/AAAAAAAAcQw/21ko7Ew2_R85JaX3WABbuKUKY9fQXCJWwCLcB/s1600/38.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:-\?/gi, "<img src='https://2.bp.blogspot.com/-xdEvOlePQ_w/V_OOfcQS4NI/AAAAAAAAcQ4/HbS_hRuzy7UuBoFVrFqxr4RLJYkpKacRACLcB/s1600/39.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/#-o/gi, "<img src='https://2.bp.blogspot.com/-EkeiFgdSFsE/V_OOfsvTP5I/AAAAAAAAcQ8/ZEyhilrapmMz0Tn-sgySr32fOKFmMZ7VwCLcB/s1600/40.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/=\D7/gi, "<img src='https://4.bp.blogspot.com/-sJ1QrFPq7Yk/V_OOfgf9BDI/AAAAAAAAcRA/OI9Ut-bTOe8N3QW1pfVbfL8Taljiw6yRQCLcB/s1600/41.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/\@-\)/gi, "<img src='https://2.bp.blogspot.com/-f9aAEgBAlhw/V_OOfvVf60I/AAAAAAAAcRE/tH0o8xTzp-gZsUGd1EgAwMDTu3vikuAMgCLcB/s1600/43.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:\^o/gi, "<img src='https://1.bp.blogspot.com/-67j6Di-IO60/V_OOgJlJKqI/AAAAAAAAcRI/J2LQuOg6lswITwyrI6b6EoPncuusMBpwgCLcB/s1600/44.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:-w/gi, "<img src='https://2.bp.blogspot.com/-tKK-hVzv_b4/V_OOgMLFJMI/AAAAAAAAcRM/1MDXscaOwRw5WxrDcHJvaWf4MRQs7WNGwCLcB/s1600/45.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/\X\_\X/gi, "<img src='https://2.bp.blogspot.com/-Yj1toLqdTJg/V_OQK0BTH6I/AAAAAAAAcRY/cHVsGzzEs0k1xGrQzbxVUpurJ5elYcHBACLcB/s1600/109.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:\!\!/gi, "<img src='https://2.bp.blogspot.com/-X4qMcPlC3no/V_OQK3I9Y3I/AAAAAAAAcRc/DUoHNgYY2882-Vvg8AEkKOPtwg2jZUrZACLcB/s1600/110.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/\\m\//gi, "<img src='https://3.bp.blogspot.com/-tecIvgVxYGE/V_OQKwjBAeI/AAAAAAAAcRg/DJF3hkwij_AdW2rtALDprPo1MYOqA8sZgCLcB/s1600/111.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:-q/gi, "<img src='https://1.bp.blogspot.com/-CplduaA8VaA/V_OQLMEV59I/AAAAAAAAcRk/ldeIkciwHqIjwCr8EL8Vvy1YV6659XVjQCLcB/s1600/112.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/\^\#\(\^/gi, "<img src='https://2.bp.blogspot.com/-OTzj6RKNUvE/V_OQLD9x03I/AAAAAAAAcRo/QYffFud8IJcnOlzaXUZgMnOVy3dw61nDACLcB/s1600/114.gif' alt='' class='bhacksmly'/>");
			bh_b_smly = bh_b_smly.replace(/:ar\!/ig, "<img src='https://4.bp.blogspot.com/-G9zQfykyyJc/V_OQLAll1yI/AAAAAAAAcRs/wsz3g5UOeQUyFgML9tgX45qRMHzWCfyMwCLcB/s1600/pirate_2.gif' alt='' class='bhacksmly'/>")
			b.item(i).innerHTML = bh_b_smly;
		}
	}
}