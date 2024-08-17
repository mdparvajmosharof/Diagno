{pkgs}: {
  env = {
    VITE_APIKEY= "AIzaSyCvEOgGEgygnGXGdUi02FacCG7X9MNPTS0";
    VITE_AUTHDOMAIN= "diagno-auth.firebaseapp.com";
    VITE_PROJECTID= "diagno-auth";
    VITE_STORAGEBUCKET= "diagno-auth.appspot.com";
    VITE_MESSAGINGSENDERID= "801400322246";
    VITE_APPID= "1:801400322246:web:cef4f8278f6c64907b3fc7";
  };
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
  ];
  idx.extensions = [
    "svelte.svelte-vscode"
    "vue.volar"
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--host"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}