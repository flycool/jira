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

67792b19000dfdebffd9
https://cloud.appwrite.io/v1

standard_77a29cb6f1228b1d7e8868c868a3b60b6f109d342d43f52f4dc9d618942146358acbc88ad95e39d5702f15bc62d7449b7ae9a28e4f8f6dd4dcd3af798ee1c63ad7a4714b47349e25cfb7facba8cfde0565c990e0b3386cbeb06c629385114c3b592026d1f3ce57487871333745e77b918d1a173f91f09afeb625a4799c09a2d3

# build a session middleware
# protect routes

Please stop using middleware to protect your routes:
https://pilcrowonpaper.com/blog/middleware-auth/

# building a dashboard layout

# building a workspace form

# handing image upload

# creating workspace members

# building a responsive modal

bun add react-use

bun add nuqs@1.19.1
nuqs: can share state with url

# building a standalone layout

# buiding workspace setting

# refactoring server queries

# add delete workspace functionality

# add reset invite code functionality

# buiding the invite system

# buiding the members list

# adding workspace projects

# building project settings

# building a task api

# buiding a task form

# building a data filters

# building a data table

bun add @tanstack/react-table@8.20.5

# adding task settings

# building a data kanban

bun add @hello-pangea/dnd

# adding the kanban update api

# building a data calendar

bun add react-big-calendar@1.14.1
bun add -D @types/react-big-calendar@1.8.11

# adding a task page

# refactoring server components

# building project analytics

# building workspace analytics

# resolving build errors

# implementing github oauth login

# deployment

use vercel 
remeber edit:
NEXT_PUBLIC_APP_URL=(the deployed url)
edit the github homepage url (the deployed url)

Console appwrite -> integrations:
add web app