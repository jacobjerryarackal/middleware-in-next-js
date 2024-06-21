import { NextRequest, NextResponse } from "next/server";

const isAuthenticated = false;


export async function middleware(request : NextRequest) {

    if(isAuthenticated){
        if(["/login","/items"].includes(request.nextUrl.pathname)){
         return   NextResponse.redirect(new URL("/dashboard", request.url))
        }
    }



    if(isAuthenticated){
        return NextResponse.next();
    }

    if(!isAuthenticated){
        if(["/dashboard","/profile"].includes(request.nextUrl.pathname)){
         return   NextResponse.redirect(new URL("/login", request.url))
        }
    }
}
