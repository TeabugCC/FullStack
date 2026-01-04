// vitest.config.ts
import { fileURLToPath as fileURLToPath2 } from "node:url";
import { mergeConfig, defineConfig as defineConfig2, configDefaults } from "file:///Users/lifei/Library/Mobile%20Documents/com~apple~CloudDocs/FullStack/wind/node_modules/vitest/dist/config.js";

// vite.config.ts
import { fileURLToPath, URL as URL2 } from "node:url";
import { defineConfig } from "file:///Users/lifei/Library/Mobile%20Documents/com~apple~CloudDocs/FullStack/wind/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/lifei/Library/Mobile%20Documents/com~apple~CloudDocs/FullStack/wind/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///Users/lifei/Library/Mobile%20Documents/com~apple~CloudDocs/FullStack/wind/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import vueDevTools from "file:///Users/lifei/Library/Mobile%20Documents/com~apple~CloudDocs/FullStack/wind/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///Users/lifei/Library/Mobile%20Documents/com~apple~CloudDocs/FullStack/wind/vite.config.ts";
var vite_config_default = defineConfig((command, mode, isSsrBuild, isPreview) => {
  console.log(command, mode, isSsrBuild, isPreview);
  if (command === "serve") {
    return {
      plugins: [
        vue(),
        vueJsx(),
        vueDevTools()
      ],
      server: {
        host: "127.0.0.0",
        port: "3000"
      },
      resolve: {
        alias: {
          "@": fileURLToPath(new URL2("./src", __vite_injected_original_import_meta_url))
        }
      },
      proxy: {}
    };
  } else {
    return {
      plugins: [
        vue(),
        vueJsx(),
        vueDevTools()
      ],
      resolve: {
        alias: {
          "@": fileURLToPath(new URL2("./src", __vite_injected_original_import_meta_url))
        }
      }
    };
  }
});

// vitest.config.ts
var __vite_injected_original_import_meta_url2 = "file:///Users/lifei/Library/Mobile%20Documents/com~apple~CloudDocs/FullStack/wind/vitest.config.ts";
var vitest_config_default = mergeConfig(
  vite_config_default,
  defineConfig2({
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/**"],
      root: fileURLToPath2(new URL("./", __vite_injected_original_import_meta_url2))
    }
  })
);
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy50cyIsICJ2aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9saWZlaS9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9GdWxsU3RhY2svd2luZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2xpZmVpL0xpYnJhcnkvTW9iaWxlIERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL0Z1bGxTdGFjay93aW5kL3ZpdGVzdC5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2xpZmVpL0xpYnJhcnkvTW9iaWxlJTIwRG9jdW1lbnRzL2NvbX5hcHBsZX5DbG91ZERvY3MvRnVsbFN0YWNrL3dpbmQvdml0ZXN0LmNvbmZpZy50c1wiO2ltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICdub2RlOnVybCdcbmltcG9ydCB7IG1lcmdlQ29uZmlnLCBkZWZpbmVDb25maWcsIGNvbmZpZ0RlZmF1bHRzIH0gZnJvbSAndml0ZXN0L2NvbmZpZydcbmltcG9ydCB2aXRlQ29uZmlnIGZyb20gJy4vdml0ZS5jb25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlQ29uZmlnKFxuICB2aXRlQ29uZmlnLFxuICBkZWZpbmVDb25maWcoe1xuICAgIHRlc3Q6IHtcbiAgICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgICAgZXhjbHVkZTogWy4uLmNvbmZpZ0RlZmF1bHRzLmV4Y2x1ZGUsICdlMmUvKionXSxcbiAgICAgIHJvb3Q6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi8nLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfSlcbilcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2xpZmVpL0xpYnJhcnkvTW9iaWxlIERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL0Z1bGxTdGFjay93aW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbGlmZWkvTGlicmFyeS9Nb2JpbGUgRG9jdW1lbnRzL2NvbX5hcHBsZX5DbG91ZERvY3MvRnVsbFN0YWNrL3dpbmQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2xpZmVpL0xpYnJhcnkvTW9iaWxlJTIwRG9jdW1lbnRzL2NvbX5hcHBsZX5DbG91ZERvY3MvRnVsbFN0YWNrL3dpbmQvdml0ZS5jb25maWcudHNcIjsvKlxuICogQExhc3QgTW9kaWZpZWQgYnk6IExpRmVpXG4gKiBATGFzdEVkaXRUaW1lOiAyMDI0LTA3LTE0IDE4OjMwOjA0XG4gKiBARGVzY3JpcHRpb246IFxuICovXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xuaW1wb3J0IHZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcbmltcG9ydCB7IHNlcnZlciB9IGZyb20gJ3R5cGVzY3JpcHQnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKGNvbW1hbmQsIG1vZGUsIGlzU3NyQnVpbGQsIGlzUHJldmlldykgPT4ge1xuICBjb25zb2xlLmxvZyhjb21tYW5kLCBtb2RlLCBpc1NzckJ1aWxkLCBpc1ByZXZpZXcpXG4gIGlmIChjb21tYW5kID09PSAnc2VydmUnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgdnVlKCksXG4gICAgICAgIHZ1ZUpzeCgpLFxuICAgICAgICB2dWVEZXZUb29scygpLFxuICAgICAgXSxcbiAgICAgIHNlcnZlcjoge1xuICAgICAgICBob3N0OiAnMTI3LjAuMC4wJyxcbiAgICAgICAgcG9ydDogJzMwMDAnXG4gICAgICB9LFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBhbGlhczoge1xuICAgICAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm94eToge1xuXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBwbHVnaW5zOiBbXG4gICAgICAgIHZ1ZSgpLFxuICAgICAgICB2dWVKc3goKSxcbiAgICAgICAgdnVlRGV2VG9vbHMoKSxcbiAgICAgIF0sXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1osU0FBUyxpQkFBQUEsc0JBQXFCO0FBQzlhLFNBQVMsYUFBYSxnQkFBQUMsZUFBYyxzQkFBc0I7OztBQ0kxRCxTQUFTLGVBQWUsT0FBQUMsWUFBVztBQUVuQyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8saUJBQWlCO0FBVmdPLElBQU0sMkNBQTJDO0FBY3pTLElBQU8sc0JBQVEsYUFBYSxDQUFDLFNBQVMsTUFBTSxZQUFZLGNBQWM7QUFDcEUsVUFBUSxJQUFJLFNBQVMsTUFBTSxZQUFZLFNBQVM7QUFDaEQsTUFBSSxZQUFZLFNBQVM7QUFDdkIsV0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLFFBQ1AsSUFBSTtBQUFBLFFBQ0osT0FBTztBQUFBLFFBQ1AsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxPQUFPO0FBQUEsVUFDTCxLQUFLLGNBQWMsSUFBSUMsS0FBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxRQUN0RDtBQUFBLE1BQ0Y7QUFBQSxNQUNBLE9BQU8sQ0FFUDtBQUFBLElBQ0Y7QUFBQSxFQUNGLE9BQU87QUFDTCxXQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsUUFDUCxJQUFJO0FBQUEsUUFDSixPQUFPO0FBQUEsUUFDUCxZQUFZO0FBQUEsTUFDZDtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsT0FBTztBQUFBLFVBQ0wsS0FBSyxjQUFjLElBQUlBLEtBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsUUFDdEQ7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOzs7QURsRHlQLElBQU1DLDRDQUEyQztBQUkzUyxJQUFPLHdCQUFRO0FBQUEsRUFDYjtBQUFBLEVBQ0FDLGNBQWE7QUFBQSxJQUNYLE1BQU07QUFBQSxNQUNKLGFBQWE7QUFBQSxNQUNiLFNBQVMsQ0FBQyxHQUFHLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDN0MsTUFBTUMsZUFBYyxJQUFJLElBQUksTUFBTUYseUNBQWUsQ0FBQztBQUFBLElBQ3BEO0FBQUEsRUFDRixDQUFDO0FBQ0g7IiwKICAibmFtZXMiOiBbImZpbGVVUkxUb1BhdGgiLCAiZGVmaW5lQ29uZmlnIiwgIlVSTCIsICJVUkwiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCIsICJkZWZpbmVDb25maWciLCAiZmlsZVVSTFRvUGF0aCJdCn0K
