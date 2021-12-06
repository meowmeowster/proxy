var hosts = [
    "linkedin.com",
    "payoneer.com",
    "awwcor.com",
    "lurkmo.re",
    "hellcase.com",
    "www.hellcase.com",
];

function FindProxyForURL(url, host)
{
	for (var i = 0; i < hosts.length; i++)
	{
		if (host == hosts[i] || host.substring(host.length - hosts[i].length - 1, host.length) == ('.' + hosts[i]))
		{
			return 'SOCKS localhost:8080';
		}
	}
	return 'DIRECT';
}