import { redirect } from "next/navigation";

export default function QrRedirectPage() {
  redirect("/hu/?utm_source=qr_code&utm_medium=offline&utm_campaign=offline_marketing");
}
