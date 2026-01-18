export async function onRequest(context) {
  const url = new URL(context.request.url);

  // 1. Define the target URL (your second project's .pages.dev URL)
  // Ensure there is no trailing slash here
  const targetHost = "https://teachingarchive.pages.dev"; 

  // 2. Rewrite the path
  // This strips "/teachingarchive" so the second project sees a request for "/" 
  // when the user visits "/teachingarchive/"
  const newPath = url.pathname.replace(/^\/teachingarchive/, "") || "/";
  
  // 3. Construct the full target URL including query parameters
  const targetUrl = new URL(newPath + url.search, targetHost);

  // 4. Fetch the content from the second project and return it
  // Pass the original request to preserve headers
  return fetch(targetUrl, context.request);
}
