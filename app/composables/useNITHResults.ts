export const useNITHResults = async () => {
  const year = 25;
  const url = `http://results.nith.ac.in/scheme${year}/studentresult/result.asp`;
  const response = await fetch(url, {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:146.0) Gecko/20100101 Firefox/146.0",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-Type": "application/x-www-form-urlencoded",
        "Sec-GPC": "1",
        "Upgrade-Insecure-Requests": "1",
        "Priority": "u=0, i",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache"
    },
    "referrer": "http://results.nith.ac.in/scheme25/studentresult/index.asp",
    "body": "RollNumber=25bme012&CSRFToken=%7BCC726015-E7BC-46D9-A691-8D64BDE383EA%7D&RequestVerificationToken=0BF83C93-D0C4-D3CE-7E6A-157F5A5F27D0&B1=Submit",
    "method": "POST",
    "mode": "cors"
});

  console.log(response);
  return response;
}
