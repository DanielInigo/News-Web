import NextAuth from "next-auth";
import Providers from "next-auth/providers/google";

export default NextAuth({
    secret:process.env.GOOGLE_SECRET,
    providers:[
        Providers({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET, 
        })
    ]
})