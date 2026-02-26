import { db } from "@/firebase/admin";
import { doc, getDoc, setDoc } from "firebase/firestore";

export async function signup(params: SignUpParams) {
	const { uid, name, email } = params;

	try {
		// const userRecord = await db.collection('users').doc(uid).get()
		const userRecord = await getDoc(doc(db, "users", uid));
		if (userRecord.exists()) {
			return {
				success: false,
				message: "Email already in use. Please sign in instead.",
			};
		}
		await setDoc(doc(db, "users", uid), {
			name,
			email,
			createdAt: new Date(),
		});
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		console.error("Error signing up user:", error);
		if (error.code === "auth/email-already-exists") {
			return {
				success: false,
				message: "Email already in use. Please sign in instead.",
			};
		}
		return {
			success: false,
			message: "An error occurred during sign up. Please try again.",
		};
	}
}
