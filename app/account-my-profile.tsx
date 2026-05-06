import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BRAND_GREEN = "#00A86B";
const SCREEN_BG = "#FFFFFF";
const TEXT_PRIMARY = "#212121";
const TEXT_SECONDARY = "#757575";
const INPUT_BG = "#FAFAFA";
const BORDER = "#EEEEEE";

type FieldRowProps = {
  label: string;
  value: string;
  icon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
};

function FieldRow({ label, value, icon, rightIcon }: FieldRowProps) {
  return (
    <View style={styles.fieldWrap}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <View style={styles.fieldInput}>
        {icon ? (
          <Ionicons name={icon} size={20} color={TEXT_SECONDARY} />
        ) : null}
        <Text style={styles.fieldValue}>{value}</Text>
        {rightIcon ? (
          <Ionicons name={rightIcon} size={20} color={TEXT_SECONDARY} />
        ) : null}
      </View>
    </View>
  );
}

export default function AccountMyProfileScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View
        style={[
          styles.header,
          { paddingTop: Platform.OS === "ios" ? insets.top : 44 },
        ]}
      >
        <TouchableOpacity
          style={styles.headerAction}
          activeOpacity={0.8}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color={TEXT_PRIMARY} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Profile</Text>
        <View style={styles.headerAction} />
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingBottom: insets.bottom + 130 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.avatarWrap}>
          <Image
            source="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80"
            style={styles.avatar}
            contentFit="cover"
          />
          <View style={styles.editDot}>
            <Ionicons name="create" size={16} color="#FFFFFF" />
          </View>
        </View>

        <FieldRow label="Full Name" value="Coffee Capture" />
        <FieldRow
          label="Email"
          value="CofCap@yourdomain.com"
          icon="mail-outline"
        />
        <FieldRow
          label="Phone Number"
          value="+1 2345 678910"
          icon="call-outline"
        />
        <FieldRow label="Gender" value="Male" rightIcon="chevron-down" />
        <FieldRow
          label="Birthdate"
          value="12/25/1995"
          rightIcon="calendar-outline"
        />
      </ScrollView>

      <View
        style={[
          styles.bottomBar,
          { paddingBottom: Math.max(insets.bottom, 12) },
        ]}
      >
        <TouchableOpacity style={styles.saveButton} activeOpacity={0.9}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SCREEN_BG,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  headerAction: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    color: TEXT_PRIMARY,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 12,
    gap: 20,
  },
  avatarWrap: {
    alignSelf: "center",
    marginBottom: 4,
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    backgroundColor: "#F0F0F0",
  },
  editDot: {
    position: "absolute",
    right: 4,
    bottom: 4,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: BRAND_GREEN,
    alignItems: "center",
    justifyContent: "center",
  },
  fieldWrap: {
    gap: 10,
  },
  fieldLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: TEXT_PRIMARY,
  },
  fieldInput: {
    minHeight: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: INPUT_BG,
    backgroundColor: INPUT_BG,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  fieldValue: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
    color: TEXT_PRIMARY,
  },
  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 24,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: BORDER,
    backgroundColor: SCREEN_BG,
  },
  saveButton: {
    height: 56,
    borderRadius: 999,
    backgroundColor: BRAND_GREEN,
    alignItems: "center",
    justifyContent: "center",
  },
  saveText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
