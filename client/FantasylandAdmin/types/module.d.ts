declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module '*.svg' {
  const svg: any;
  export default svg;
}

declare module '*.png' {
  const png: any;
  export default png;
}