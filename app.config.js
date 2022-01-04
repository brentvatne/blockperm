import { AndroidConfig } from "@expo/config-plugins";

export default {
  name: "blockperm",
  slug: "blockperm",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  android: {
    package: "com.brents.blockperm",
  },
  plugins: [
    ["expo-camera", {}],
    [
      AndroidConfig.Permissions.withBlockedPermissions,
      [
        "android.permission.READ_PHONE_STATE",
        "android.permission.RECORD_AUDIO",
      ],
    ],
  ],
};
