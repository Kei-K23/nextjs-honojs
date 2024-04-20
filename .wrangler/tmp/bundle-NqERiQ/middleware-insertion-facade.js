				import worker, * as OTHER_EXPORTS from "/Users/arkarmin/Desktop/projects/nextjs/nextjs_honojs/app/api/[[...route]]/route.ts";
				import * as __MIDDLEWARE_0__ from "/Users/arkarmin/Desktop/projects/nextjs/nextjs_honojs/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts";
import * as __MIDDLEWARE_1__ from "/Users/arkarmin/Desktop/projects/nextjs/nextjs_honojs/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts";
				
				worker.middleware = [
					__MIDDLEWARE_0__.default,__MIDDLEWARE_1__.default,
					...(worker.middleware ?? []),
				].filter(Boolean);
				
				export * from "/Users/arkarmin/Desktop/projects/nextjs/nextjs_honojs/app/api/[[...route]]/route.ts";
				export default worker;