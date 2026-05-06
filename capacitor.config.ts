import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.looksai.lastcourseapp',
  appName: 'Last Course App',
  webDir: 'dist/public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
