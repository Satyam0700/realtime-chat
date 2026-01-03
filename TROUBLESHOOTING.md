# Troubleshooting Connection Error

## Issue: `net::ERR_CONNECTION_REFUSED` on `localhost:3000/api/room/create`

This error occurs when the Next.js development server is **not running**.

## Solution

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

Expected output:
```
  ▲ Next.js 16.1.1
  - Local:        http://localhost:3000
```

### Step 3: Verify Connection
- Open browser to: http://localhost:3000
- Click "CREATE SECURE ROOM" button
- Should create a room and redirect to `/room/[roomId]`

## What's Running

The Elysia API server is bundled inside the Next.js catch-all route:
- **Route**: `src/app/api/[[...slugs]]/route.ts`
- **Endpoints**:
  - `POST /api/room/create` - Create new room
  - `DELETE /api/room` - Delete room  
  - `POST /api/messages` - Send message
  - `GET /api/messages` - Get message history
  - `GET /api/room/ttl` - Get room TTL

## Server Requirements

Your `.env.local` has these required services:
- ✅ **Upstash Redis** (configured for data persistence)
- ✅ **Upstash Realtime** (optional, for real-time updates)

## Port Already in Use?

If port 3000 is already in use:

```bash
# Use a different port
npm run dev -- -p 3001
```

Then access: http://localhost:3001

## Full Startup Checklist

- [ ] Dependencies installed: `npm install`
- [ ] `.env.local` exists with Redis credentials
- [ ] Run: `npm run dev`
- [ ] Server listening on localhost:3000
- [ ] Open http://localhost:3000 in browser
- [ ] Click CREATE button to test API
