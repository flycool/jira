# jira project note


# add shadcn package
bunx --bun shadcn@2.1.0 init

bunx --bun shadcn@2.1.0 add
avatar
badge
calendar
card
chart
checkbox
dialog
drawer
dropdown-menu
form
input
label
popover
scroll-area
select
separator
sheet
skeleton
sonner
table
tabs
textarea

---

# create auth

bun add react-icons

form validate:

import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";


# set up hono api
https://hono.dev/
offer type infer, type safe

bun add hono


# creating auth api

bun add @tanstack/react-query@5.59.0
bun add @hono/zod-validator

# set up appwrite - database

https://appwrite.io/

bun add node-appwrite@14.0.0

bun add server-only