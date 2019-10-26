function FindProxyForURL(url, host) {
	//if(host.indexOf("thcic") >= 0 || host.indexOf("tsinghua") >= 0 || host.indexOf("166.111") >= 0 || host.indexOf("101.6") >= 0 || host.indexOf("182.92.156.85") >= 0 ||  host.indexOf("47.88.139.80") >= 0 ||  host.indexOf("192.168") >= 0 ){
	if(host.indexOf("thcic") >= 0 || host.indexOf("tsinghua") >= 0 || host.indexOf("192.168") >= 0 ){
		return "DIRECT";
	}else{
		//return "PROXY 172.16.11.129:1081";
		//return "PROXY 192.168.31.17:1081";
		return "SOCKS 192.168.31.152:1080"
	}
}
