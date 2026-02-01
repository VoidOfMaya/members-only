# Members-Only App MVP Checklist
this page is intended for orgenizing task by layer!
## 1️⃣ Database Layer
- [X] Tables: `members`, `messages`, `sessions`
- [X] Queries:
  - Messages: `addMsg`, `getAllMessagesForMembers`, `getAllMessagesForNonMembers`, `deleteMsg` (admin only)
  - Members: `addMember`, `activateMembership`, `getMember`, `toggleAdminMod`

## 2️⃣ Validation Layer
- [X] Frontend input validation for sign-up, login, messages
- [X] Backend validation & sanitization for:
  - Sign-up form (`firstName`, `lastName`, `username`, `password`, `confirmPassword`)
  - Login form (`username`, `password`)
  - Message input (`title`, `content`)
  - Membership passcode input

## 3️⃣ Views / Frontend Layer
- [X] Sign-up form (HTML + validation feedback)
- [X] Login page (HTML + validation feedback)
- [X] Homepage (message display, conditional for members vs guests)
- [X] Add message form (title + content)
- [X] Delete message button (for admins)
- [X] Logout link on homepage

## 4️⃣ Core Middleware / Server Layer
- [X] Express app setup
- [X] Session setup (`express-session`, `connect-pg-simple`)
- [X] Global middleware: `body-parser` / `express.json()`
- [X] Routers:
  - `GET /sign-up`
  - `GET /log-in`
  - `GET /homepage`
- [ ] POST routes & controllers:
  - `/auth/sign-up` → register member
  - `/auth/log-in` → login & set session
  - `/auth/log-out` → logout & destroy session
  - `/msg` → post new message
  - `/msg/:id` → delete message (admin only)
  - `/membership-stat` → activate membership
  - `/adminPrev` → toggle admin status

## 5️⃣ Auth / Passport Layer
- [X] Passport LocalStrategy setup
- [X] Serialize / deserialize user
- [X] Session authentication (`isMember`, `isAdmin` checks)
- [X] Secure logout (destroy session + clear cookie)