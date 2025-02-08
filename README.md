# Top Deck Community Circut: A Yu-Gi-Oh T3 Next.js Website

This is a work-in-progress T3 (Next.js) website for the Yu-Gi-Oh! community, providing features such as tournament advertisements, deck viewing, and account management.

---

## Tech Stack
- **Next.js** - React Framework
- **TRPC** - API development
- **Drizzle ORM** - SQLite Database
- **NextAuth.js** - Authentication (Discord login implemented)
- **Stripe** - Payment integration
- **Tailwind CSS 3** - Styling
- **Aceternity - UI components
- **Shadcn - UI components

---

## Planned Features
1. **Post Board for Tournament Advertisements**
   - Users can post their upcoming tournaments.
   - Paid postings with top-up options for ranking higher.
2. **Deck Viewing and Editing**
   - Browse Yu-Gi-Oh! decks.
   - Potential for deck-building capabilities.
3. **Account Management**
   - Sign Up/Login via Discord (Already implemented using NextAuth.js).
4. **Stripe Integration**
   - Accept payments for tournament listings and potential premium features.
5. **Database with Drizzle ORM**
   - Using SQLite for storing data efficiently.
6. **API with TRPC**
   - Fully type-safe API for handling backend logic.
7. **Tailwind CSS 3 for Styling**
   - Modern, utility-first CSS framework for responsive and clean design.

---

## Screenshots

| Home Page (Will change) |
|-------------------------|
| <img src="screenshots/Home.png" width="1000" /> |

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/wuxnz/project-ygo.git
   cd project-ygo
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Migrate the database:
   ```sh
   npm run db:push
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```

---

## Contributions
Since this project is still in early development, contributions and feature suggestions are welcome!

---

## License
This project is licensed under the MIT License.

