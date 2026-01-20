export async function onRequest(context) {
  const url = new URL(context.request.url);

  const targetHost = "https://www.tzarfunglee.com"; 

  // Rewrite the path
  // This strips "/teachingarchive" so the second project sees a request for "/" 
  // when the user visits "/teachingarchive/"
  const newPath = url.pathname.replace(/^\/teachingarchive/, "") || "/";
  
  // Construct the full target URL including query parameters
  const targetUrl = new URL(newPath + url.search, targetHost);

  // Fetch the content from the second project and return it
  // Pass the original request to preserve headers
  return fetch(targetUrl, context.request);
}

