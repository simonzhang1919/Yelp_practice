// vite.config.js
import { defineConfig } from "file:///Users/simonzhang/Desktop/proj/Yelp_practice/Client/node_modules/vite/dist/node/index.js";
import react from "file:///Users/simonzhang/Desktop/proj/Yelp_practice/Client/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { chakra } from "file:///Users/simonzhang/Desktop/proj/Yelp_practice/Client/node_modules/@chakra-ui/react/dist/index.mjs";
var vite_config_default = defineConfig({
  server: {
    watch: {
      usePolling: true
    }
  },
  // server: {
  // proxy: {
  //   "/api": {
  //     target: "http://localhost:3000/",
  //     changeOrigin: true,
  //     secure: false,
  //     cookiePathRewrite: {
  //       "*": "/",
  //     },
  //     configure:(proxy )=>{
  //       console.log("proxy" , proxy)
  //     }
  //   },
  // },
  // proxy:{
  //   "/api":"http://localhost:3000/",
  // }
  // },
  plugins: [react()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvc2ltb256aGFuZy9EZXNrdG9wL3Byb2ovWWVscF9wcmFjdGljZS9DbGllbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9zaW1vbnpoYW5nL0Rlc2t0b3AvcHJvai9ZZWxwX3ByYWN0aWNlL0NsaWVudC92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvc2ltb256aGFuZy9EZXNrdG9wL3Byb2ovWWVscF9wcmFjdGljZS9DbGllbnQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHsgY2hha3JhIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cbiAgc2VydmVyOiB7XG4gICAgd2F0Y2g6IHtcbiAgICAgIHVzZVBvbGxpbmc6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgLy8gc2VydmVyOiB7XG4gICAgLy8gcHJveHk6IHtcbiAgICAvLyAgIFwiL2FwaVwiOiB7XG4gICAgLy8gICAgIHRhcmdldDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvXCIsXG4gICAgLy8gICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAvLyAgICAgc2VjdXJlOiBmYWxzZSxcbiAgICAvLyAgICAgY29va2llUGF0aFJld3JpdGU6IHtcbiAgICAvLyAgICAgICBcIipcIjogXCIvXCIsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIGNvbmZpZ3VyZToocHJveHkgKT0+e1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKFwicHJveHlcIiAsIHByb3h5KVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9LFxuICAgIC8vIH0sXG4gICAgLy8gcHJveHk6e1xuICAgIC8vICAgXCIvYXBpXCI6XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvXCIsXG4gICAgLy8gfVxuICAvLyB9LFxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlUsU0FBUyxvQkFBb0I7QUFDeFcsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsY0FBYztBQUd2QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUUxQixRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxZQUFZO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQW1CQSxTQUFTLENBQUMsTUFBTSxDQUFDO0FBQ25CLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
