import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import { useThemePreference } from "./contexts/theme-preference";

const COLORS = {
  light: {
    background: "#ffffff",
    text: "#212121",
    border: "#f5f5f5",
    selected: "#00A86B",
    subtext: "#616161",
  },
  dark: {
    background: "#121212",
    text: "#ffffff",
    border: "#2a2a2a",
    selected: "#00C878",
    subtext: "#b0b0b0",
  },
};

const MODAL_HEIGHT = 400;

export default function AppAppearanceTheme() {
  const router = useRouter();
  const { pref, setPref } = useThemePreference();
  const systemColorScheme = useColorScheme();
  const effectiveTheme = pref === "system" ? systemColorScheme : pref;
  const colors = effectiveTheme === "dark" ? COLORS.dark : COLORS.light;

  const [selectedTheme, setSelectedTheme] = React.useState<
    "system" | "light" | "dark"
  >(pref);
  const [showModal, setShowModal] = React.useState(false);

  const handleConfirm = () => {
    setPref(selectedTheme);
    setShowModal(false);
  };

  const handleCancel = () => {
    setSelectedTheme(pref);
    setShowModal(false);
  };

  const themeLabel =
    pref === "system" ? "System" : pref === "light" ? "Light" : "Dark";

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <StatusBar style={effectiveTheme === "dark" ? "light" : "dark"} />
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={22} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: colors.text }]}>Theme</Text>
        <View style={{ width: 44 }} />
      </View>

      <View style={styles.content}>
        <TouchableOpacity
          style={[styles.row, { borderColor: colors.border }]}
          onPress={() => setShowModal(true)}
        >
          <Text style={[styles.rowTitle, { color: colors.text }]}>Theme</Text>
          <View style={styles.rowRight}>
            <Text style={[styles.rowValue, { color: colors.subtext }]}>
              {themeLabel}
            </Text>
            <Ionicons name="chevron-forward" size={20} color={colors.subtext} />
          </View>
        </TouchableOpacity>
      </View>

      <Modal
        visible={showModal}
        transparent
        animationType="fade"
        onRequestClose={handleCancel}
      >
        <View
          style={[styles.overlay, { backgroundColor: "rgba(9, 16, 29, 0.6)" }]}
        >
          <View style={[styles.modal, { backgroundColor: colors.background }]}>
            <View style={styles.handle} />

            <Text style={[styles.modalTitle, { color: colors.text }]}>
              Choose Theme
            </Text>

            <View style={[styles.divider, { borderColor: colors.border }]} />

            <View style={styles.optionsContainer}>
              {["system", "light", "dark"].map((theme) => (
                <TouchableOpacity
                  key={theme}
                  style={[
                    styles.option,
                    {
                      borderBottomColor: colors.border,
                    },
                  ]}
                  onPress={() => setSelectedTheme(theme as any)}
                >
                  <View
                    style={[
                      styles.radio,
                      selectedTheme === theme && {
                        borderColor: colors.selected,
                      },
                    ]}
                  >
                    {selectedTheme === theme && (
                      <View
                        style={[
                          styles.radioDot,
                          { backgroundColor: colors.selected },
                        ]}
                      />
                    )}
                  </View>
                  <Text style={[styles.optionText, { color: colors.text }]}>
                    {theme === "system"
                      ? "System Default"
                      : theme.charAt(0).toUpperCase() + theme.slice(1)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={[styles.divider, { borderColor: colors.border }]} />

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: colors.border }]}
                onPress={handleCancel}
              >
                <Text style={[styles.buttonText, { color: colors.selected }]}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: colors.selected }]}
                onPress={handleConfirm}
              >
                <Text style={[styles.buttonText, { color: colors.background }]}>
                  OK
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  backBtn: { width: 44, height: 44, justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "700" },
  content: { padding: 16 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  rowRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  rowTitle: { fontSize: 16, fontWeight: "600" },
  rowValue: { fontSize: 14 },

  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modal: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: MODAL_HEIGHT,
    paddingBottom: 36,
  },
  handle: {
    width: 38,
    height: 3,
    backgroundColor: "#ccc",
    borderRadius: 1.5,
    alignSelf: "center",
    marginTop: 8,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 16,
  },
  divider: {
    borderBottomWidth: 1,
    marginVertical: 8,
  },
  optionsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    maxHeight: 200,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    gap: 16,
    borderBottomWidth: 1,
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  radioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  optionText: {
    fontSize: 20,
    fontWeight: "500",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 16,
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  button: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 1000,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
  },
});
