// vite.config.js
import { sveltekit } from "file:///home/thanhhm2/Workspace/mdxblog/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { defineConfig } from "file:///home/thanhhm2/Workspace/mdxblog/node_modules/vite/dist/node/index.js";
import { imagetools } from "file:///home/thanhhm2/Workspace/mdxblog/node_modules/vite-imagetools/dist/index.js";
var vite_config_default = defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        //   additionalData: "@import 'src/lib/styles/variables.scss';",
      }
    }
  },
  define: {
    "process.env.VITE_BUILD_TIME": JSON.stringify((/* @__PURE__ */ new Date()).toISOString())
  },
  plugins: [sveltekit(), imagetools()],
  server: {
    port: 5173,
    strictPort: false
  },
  preview: {
    port: 4173,
    strictPort: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS90aGFuaGhtMi9Xb3Jrc3BhY2UvbWR4YmxvZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvdGhhbmhobTIvV29ya3NwYWNlL21keGJsb2cvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvdGhhbmhobTIvV29ya3NwYWNlL21keGJsb2cvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBzdmVsdGVraXQgfSBmcm9tIFwiQHN2ZWx0ZWpzL2tpdC92aXRlXCJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCJcbmltcG9ydCB7IGltYWdldG9vbHMgfSBmcm9tIFwidml0ZS1pbWFnZXRvb2xzXCJcblxuLyoqIEB0eXBlIHtpbXBvcnQoJ3ZpdGUnKS5Vc2VyQ29uZmlnfSAqL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgY3NzOiB7XG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgc2Nzczoge1xuICAgICAgICAvLyAgIGFkZGl0aW9uYWxEYXRhOiBcIkBpbXBvcnQgJ3NyYy9saWIvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzJztcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgZGVmaW5lOiB7XG4gICAgXCJwcm9jZXNzLmVudi5WSVRFX0JVSUxEX1RJTUVcIjogSlNPTi5zdHJpbmdpZnkobmV3IERhdGUoKS50b0lTT1N0cmluZygpKSxcbiAgfSxcbiAgcGx1Z2luczogW3N2ZWx0ZWtpdCgpLCBpbWFnZXRvb2xzKCldLFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiA1MTczLFxuICAgIHN0cmljdFBvcnQ6IGZhbHNlLFxuICB9LFxuICBwcmV2aWV3OiB7XG4gICAgcG9ydDogNDE3MyxcbiAgICBzdHJpY3RQb3J0OiBmYWxzZSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtSLFNBQVMsaUJBQWlCO0FBQzVTLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsa0JBQWtCO0FBRzNCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQTtBQUFBLE1BRU47QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sK0JBQStCLEtBQUssV0FBVSxvQkFBSSxLQUFLLEdBQUUsWUFBWSxDQUFDO0FBQUEsRUFDeEU7QUFBQSxFQUNBLFNBQVMsQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO0FBQUEsRUFDbkMsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sWUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxFQUNkO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
