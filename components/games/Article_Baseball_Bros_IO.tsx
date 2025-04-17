// components/ArticleContent.tsx
import React from 'react';

const Article: React.FC = () => {
    return (
        <article className="max-w-4xl mx-auto p-6 rounded-lg leading-8">
            {/* Header */}
            <header className="mb-8">
                <h1
                    className="text-2xl md:text-3xl font-extrabold text-center text-red-400 mb-4 font-cartoon"
                >
                    Baseball Bros IO: Your Gateway to a Legendary Baseball Experience
                </h1>
                <p className="text-lg text-gray-300 text-justify">
                    Discover Baseball Bros IO, a fast-paced, easy-to-learn, and incredibly fun baseball bros game that perfectly blends the classic American sport with competitive multiplayer action. As the 2025 MLB season heats up, this game offers baseball enthusiasts a top-notch virtual battleground. In this comprehensive guide, we introduce every aspect of Baseball Bros IO to help you get started quickly and enjoy endless fun.
                </p>
            </header>

            {/* Game Overview & Key Features */}
            <section className="mb-8">
                <h2
                    className="text-2xl font-bold text-red-400 mb-4 font-cartoon"
                >
                    Game Overview &amp; Key Features
                </h2>
                <h3
                    className="text-xl font-semibold text-red-300 mb-2 font-cartoon"
                >
                    A Unique Take on Baseball
                </h3>
                <p className="mb-4 text-gray-300">
                    Baseball Bros IO is a baseball bros game that has quickly won hearts with its straightforward controls and dynamic match experience. Staying true to the basic rules of baseball, players switch between offense and defense – hitting home runs, strategically running the bases to score, and thwarting opponents' scoring attempts.
                </p>
                <h3
                    className="text-xl font-semibold text-red-300 mb-2 font-cartoon"
                >
                    Distinctive Gameplay Elements
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li>
                        <span className="font-bold">Balanced Simplicity &amp; Strategy:</span> While the controls are simple and accessible, the game packs plenty of "crazy hijinks" that keep each match unpredictable and entertaining. This design ensures that both newcomers and seasoned baseball fans find plenty to enjoy.
                    </li>
                    <li>
                        <span className="font-bold">Cartoon-Style Visuals &amp; Relaxed Atmosphere:</span> Unlike traditional baseball games, Baseball Bros IO uses a fun, cartoonish art style and a relaxed vibe that minimizes the learning curve while preserving the sport's core strategic elements. This inclusive style attracts a wide range of players and keeps the game lighthearted and engaging.
                    </li>
                </ul>
            </section>

            {/* Team Attributes & Customization Options */}
            <section className="mb-8">
                <h2
                    className="text-2xl font-bold text-red-400 mb-4 font-cartoon"
                >
                    Team Attributes &amp; Customization Options
                </h2>
                <h3
                    className="text-xl font-semibold text-red-300 mb-2 font-cartoon"
                >
                    Diverse Team Stats
                </h3>
                <p className="mb-4 text-gray-300">
                    Every team in Baseball Bros IO comes with its own set of attributes, including pitching speed, ball trajectory, running speed, batting power, and defensive skills. Tailor your choice to match your play style, adding an extra layer of strategy and replayability.
                </p>
                <h3
                    className="text-xl font-semibold text-red-300 mb-2 font-cartoon"
                >
                    Personalized Customization
                </h3>
                <p className="mb-4 text-gray-300">
                    Enhance your experience with rich customization options:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Change the colors and styles of hats, shirts, gloves, and shorts.</li>
                    <li>Create a unique team identity that boosts both your game experience and team spirit.</li>
                </ul>
            </section>

            {/* Detailed Game Modes */}
            <section className="mb-8">
                <h2
                    className="text-2xl font-bold text-red-400 mb-4 font-cartoon"
                >
                    Detailed Game Modes
                </h2>
                <ul className="list-decimal list-inside text-gray-300 space-y-4">
                    <li>
                        <span className="font-bold">Quick Play:</span> Ideal for beginners and players short on time, the Quick Play mode lets you jump straight into the action without tedious setup. Experience the core elements of hitting, base running, and defense right away.
                    </li>
                    <li>
                        <span className="font-bold">Franchise Mode:</span> Step into the shoes of a team owner and manager in Franchise Mode. Over a 20-game season, lead your team to claim the coveted Bros Series championship. As the competition intensifies, detailed match stats (including scores, hits, home runs, errors, and strikeouts) help you refine your strategy.
                    </li>
                    <li>
                        <span className="font-bold">2 Players on the Same PC:</span> Perfect for face-to-face competition, this mode lets two players battle it out on the same computer, delivering an authentic and social baseball showdown.
                    </li>
                    <li>
                        <span className="font-bold">Online VS Friends:</span> Break the geographical barriers by creating or joining private rooms to play against friends online. Enjoy real-time, seamless gameplay that connects you with baseball bros enthusiasts around the world.
                    </li>
                </ul>
            </section>

            {/* Controls & Gameplay Guide */}
            <section className="mb-8">
                <h2
                    className="text-2xl font-bold text-red-400 mb-4 font-cartoon"
                >
                    Controls & Gameplay Guide
                </h2>
                <h3
                    className="text-xl font-semibold text-red-300 mb-2 font-cartoon"
                >
                    Hitting
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li>
                        <span className="font-bold">Left Click / T:</span> Swing the bat (timing is crucial for optimal hits)
                    </li>
                    <li>
                        <span className="font-bold">WASD / Arrow Keys:</span> Position your batter for better hits
                    </li>
                    <li>
                        <span className="font-bold">E / Y:</span> Power hit (consumes stamina but delivers stronger hits)
                    </li>
                    <li>
                        <span className="font-bold">Aim for the Home Run:</span> While a home run is the ideal outcome, adapt your strategy based on the opponent's defense.
                    </li>
                </ul>
                <h3
                    className="text-xl font-semibold text-red-300 mb-2 font-cartoon"
                >
                    Base Running
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li>
                        <span className="font-bold">WASD / Arrow Keys:</span> Control runner movement
                    </li>
                    <li>
                        <span className="font-bold">Space:</span> Change direction or dodge defenders
                    </li>
                    <li>
                        <span className="font-bold">Slides:</span> Automatically triggered when approaching a base at high speed
                    </li>
                </ul>
                <h3
                    className="text-xl font-semibold text-red-300 mb-2 font-cartoon"
                >
                    Pitching & Fielding
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li>
                        <span className="font-bold">Left Click / T:</span> Throw the ball when pitching or fielding
                    </li>
                    <li>
                        <span className="font-bold">WASD / Arrow Keys:</span> Move your fielder or aim your pitch
                    </li>
                    <li>
                        <span className="font-bold">Positioning:</span> Strategically position your players to block opponents' base-running paths.
                    </li>
                </ul>
                <div className="bg-gray-800/60 p-4 rounded-lg mb-4">
                    <h4 className="font-bold text-blue-300 mb-2">Pro Tip: The Perfect Swing</h4>
                    <p className="text-gray-300">
                        The key to mastering Baseball Bros IO is perfecting your swing timing. Wait for the pitch to get close before swinging, and adjust your batter's position to meet the ball at its sweet spot. A well-timed, perfectly positioned hit dramatically increases your chances of a home run.
                    </p>
                </div>
            </section>

            {/* Advanced Strategies for Mastery */}
            <section className="mb-8">
                <h2
                    className="text-2xl font-bold text-red-400 mb-4 font-cartoon"
                >
                    Advanced Strategies for Mastery
                </h2>
                <h3
                    className="text-xl font-semibold text-red-300 mb-2 font-cartoon"
                >
                    Batting Techniques &amp; Strategy
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li>
                        <span className="font-bold">Focus on timing:</span> Perfect your swing for optimal results.
                    </li>
                    <li>
                        <span className="font-bold">Avoid rushing:</span> Prevent errors by not hurrying your swing.
                    </li>
                    <li>
                        <span className="font-bold">Adjust based on the pitch:</span> Sometimes a well-placed hit is more effective than a desperate attempt for a home run.
                    </li>
                </ul>
                <h3
                    className="text-xl font-semibold text-red-300 mb-2 font-cartoon"
                >
                    Base Running Tactics
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li>
                        <span className="font-bold">Observe carefully:</span> Watch the ball's landing and your opponents' positions before advancing.
                    </li>
                    <li>
                        <span className="font-bold">Use sliding techniques:</span> Avoid being tagged out with smart sliding.
                    </li>
                    <li>
                        <span className="font-bold">Change direction at key moments:</span> Use the spacebar to dodge defenders.
                    </li>
                </ul>
                <h3
                    className="text-xl font-semibold text-red-300 mb-2 font-cartoon"
                >
                    Defensive Tactics
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li>
                        <span className="font-bold">Anticipate:</span> Move early to intercept your opponent's shot direction.
                    </li>
                    <li>
                        <span className="font-bold">Quick passes:</span> Facilitate rapid defensive transitions with precise passes.
                    </li>
                    <li>
                        <span className="font-bold">Jump or dive:</span> Use dynamic moves to catch high fly balls or chase down grounders.
                    </li>
                </ul>
                <h3
                    className="text-xl font-semibold text-red-300 mb-2 font-cartoon"
                >
                    Mental Game &amp; Continuous Improvement
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Stay calm and focused, even when facing tough opponents.</li>
                    <li>Learn from your mistakes and analyze match stats to improve.</li>
                    <li>Practice across different game modes to develop a well-rounded skill set.</li>
                </ul>
            </section>

            {/* Technical Requirements & Compatibility */}
            <section className="mb-8">
                <h2
                    className="text-2xl font-bold text-red-400 mb-4 font-cartoon"
                >
                    Technical Requirements & Compatibility
                </h2>
                <h3
                    className="text-xl font-semibold text-red-300 mb-2 font-cartoon"
                >
                    Browser Compatibility
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li>
                        <span className="font-bold">Recommended Browser:</span> Google Chrome offers the most stable experience with Baseball Bros IO.
                    </li>
                    <li>
                        <span className="font-bold">Tested Alternatives:</span> Firefox and Safari have been tested, though compatibility isn't guaranteed 100%.
                    </li>
                    <li>
                        <span className="font-bold">Browser Settings:</span> Ensure your browser's hardware acceleration is enabled for optimal performance.
                    </li>
                </ul>
                <h3
                    className="text-xl font-semibold text-red-300 mb-2 font-cartoon"
                >
                    System Requirements
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li>
                        <span className="font-bold">Processor:</span> Any modern CPU from the last 5-7 years should suffice.
                    </li>
                    <li>
                        <span className="font-bold">Graphics:</span> Integrated graphics are sufficient; dedicated GPU not required.
                    </li>
                    <li>
                        <span className="font-bold">Memory:</span> 4GB RAM minimum for smooth gameplay.
                    </li>
                    <li>
                        <span className="font-bold">Internet:</span> Stable broadband connection for online play.
                    </li>
                </ul>
                <h3
                    className="text-xl font-semibold text-red-300 mb-2 font-cartoon"
                >
                    Mobile Compatibility
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Enjoy improved virtual controllers on iPads and smartphones.</li>
                    <li>The mobile version retains the core gameplay while enhancing touch controls for a seamless experience.</li>
                </ul>
            </section>

            {/* Related Games in the Bros Series */}
            <section className="mb-8">
                <h2
                    className="text-2xl font-bold text-red-400 mb-4 font-cartoon"
                >
                    Related Games in the Bros Series
                </h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                        <span className="font-bold">Football Bros:</span> A high-energy soccer game with exhilarating multiplayer battles.
                    </li>
                    <li>
                        <span className="font-bold">Basket Bros:</span> A basketball game focused on skillful plays and teamwork.
                    </li>
                    <li>
                        <span className="font-bold">Soccer Bros:</span> Emphasizing passing and shooting techniques.
                    </li>
                    <li>
                        <span className="font-bold">Wrestle Bros:</span> Delivering a unique, action-packed wrestling experience.
                    </li>
                </ul>
            </section>

            {/* Conclusion */}
            <section className="mb-8">
                <h2
                    className="text-2xl font-bold text-red-400 mb-4 font-cartoon"
                >
                    Conclusion
                </h2>
                <p className="text-gray-300">
                    With its intuitive controls, varied game modes, and entertaining gameplay, Baseball Bros IO stands out as the perfect choice for baseball fans looking for a top-tier gaming experience. Whether you're jumping into a quick match or managing a long-term franchise, Baseball Bros IO offers lasting excitement and challenges for every player.
                </p>
            </section>
        </article>
    );
};

export default Article;
