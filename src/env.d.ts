/// <reference types="astro/client" />

type ENV = {
  EXAMPLE: string;
  PUBLIC_EXAMPLE: string;
};

type Runtime = import("@astrojs/cloudflare").AdvancedRuntime<ENV>;

declare namespace App {
  interface Locals extends Runtime {}
}
