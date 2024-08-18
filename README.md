# BoomZoom

BoomZoom is a video conferencing app, a clone of the popular Zoom app. It provides a seamless video communication experience with features like starting a meeting, scheduling a meeting, and sharing the meeting link. The app is built using Next.js and styled with TailwindCSS for a modern and responsive user interface.

## Features

- **Start Meeting**: Instantly create and start a new video meeting.
- **Schedule Meeting**: Schedule meetings for a later time and date.
- **Share Meeting**: Easily share the meeting link with participants.

## Live Demo

Check out the live version of BoomZoom: [boom-zoon-ps8847s-projects.vercel.app](https://boom-zoon-ps8847s-projects.vercel.app)

## Technologies Used

- **Frontend**: [Next.js](https://nextjs.org/), [TailwindCSS](https://tailwindcss.com/)
- **Authentication**: [Clerk](https://clerk.com/)
- **Video SDK**: [GetStream](https://getstream.io/video/)

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env.local` file:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY= 
```

## Environment Variables

1. Clone the repository:

   ```bash
   git clone https://github.com/ps8847/boomZoon.git
    ```
2. Install dependencies:
    
    ```bash
    cd boomZoon
    npm install
    ```
3. Start the development servers:

    ```bash
    npm run dev
    ```
Open http://localhost:3000 with your browser to see the result.

## Contributing
Contributions are welcome! Please feel free to submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.