import br from "browser-sync";

const browserSync = br.create();

browserSync.init({
  server: {
    baseDir: "./public",
  },
});

browserSync.watch("public/**/*.*").on("change", browserSync.reload);
