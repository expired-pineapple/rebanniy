export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard", "/dashboard/student/register", "/dashboard/admins", "/dashboard/studnet/:id", "/dashboard/pricing"] }

