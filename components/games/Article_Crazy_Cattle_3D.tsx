import React from 'react';

const CrazyCattle3D: React.FC = () => {
    return (
        <article className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md leading-8">
            {/* Title and Introduction */}
            <header className="mb-8">
                <h1
                    className="text-2xl md:text-3xl font-extrabold text-center text-red-700 mb-4 font-cartoon"
                >
                    Crazy Cattle 3D: The Ultimate Explosive Sheep Battle Royale Experience
                </h1>
                <p className="text-lg text-gray-700 text-justify">
                    Explore <strong>Crazy Cattle 3D</strong>, an adrenaline-pumping battle royale game where you control explosive sheep in three distinct global environments for a chaotic survival challenge. Master the physics-based movement system, outsmart your opponents, and be the last sheep standing! <strong>Crazy Cattle 3D</strong> has quickly gained popularity in the player community with its unique physics system and challenging gameplay, becoming one of the hottest indie games of 2024.
                </p>
                <div className="my-6 flex justify-center">
                    <img
                        src="/assets/images/games/crazy-cattle-3d.webp"
                        alt="Crazy Cattle 3D Game Screenshot"
                        className="rounded-lg shadow-md max-w-full h-auto"
                    />
                </div>
            </header>

            {/* Game Overview and Key Features */}
            <section className="mb-8">
                <h2
                    className="text-2xl font-bold text-red-600 mb-4 font-cartoon"
                >
                    Game Overview & Core Features
                </h2>
                <h3
                    className="text-xl font-semibold text-red-500 mb-2 font-cartoon"
                >
                    Thrilling Sheep Battle Royale Experience
                </h3>
                <p className="mb-4 text-gray-800">
                    <strong>Crazy Cattle 3D</strong> is a unique battle royale game that combines physics engine with strategic gameplay, creating a hilarious yet thrilling gaming experience. As a sheep with explosive capabilities, your mission is to survive in a shrinking game area while defeating other woolly opponents to become the ultimate winner. Unlike other battle royale games, <strong>Crazy Cattle 3D</strong> introduces unique sheep physics that make each match unpredictable.
                </p>
                <div className="my-4 flex justify-center">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Q141PhG166o?si=RVty083iLZdLRb2Y"
                        title="Crazy Cattle 3D Game Trailer"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg shadow-md"
                    ></iframe>
                </div>
                <h3
                    className="text-xl font-semibold text-red-500 mb-2 font-cartoon"
                >
                    Unique Game Elements
                </h3>
                <ul className="list-disc list-inside text-gray-800 space-y-2 mb-4">
                    <li>
                        <span className="font-bold">Revolutionary Physics System:</span> <strong>Crazy Cattle 3D</strong> features a groundbreaking physics engine specifically designed for authentic sheep movement. Every animal responds realistically to environmental factors, creating unpredictable and hilarious moments.
                    </li>
                    <li>
                        <span className="font-bold">Explosive Collision Mechanics:</span> Perfect your collision timing to send opponents flying off the map or use momentum to execute evasive maneuvers when threatened. <strong>Crazy Cattle 3D</strong>'s collision system makes each confrontation an art of strategy and timing.
                    </li>
                    <li>
                        <span className="font-bold">Skill-Based Advancement:</span> Success in <strong>Crazy Cattle 3D</strong> comes from genuine player improvement, not unlocks or upgrades. This pure gameplay mechanic puts all players on an equal competitive field.
                    </li>
                    <li>
                        <span className="font-bold">Sheep AI Behavior Patterns:</span> Exclusively developed AI sheep exhibit complex behavior patterns, learning from player strategies and adjusting accordingly, making each match feel fresh. <strong>Crazy Cattle 3D</strong>'s AI system makes single-player mode challenging too.
                    </li>
                </ul>
            </section>

            {/* Game Environments and Maps */}
            <section className="mb-8">
                <h2
                    className="text-2xl font-bold text-red-600 mb-4 font-cartoon"
                >
                    Three Unique Battleground Environments
                </h2>
                <p className="mb-4 text-gray-800">
                    <strong>Crazy Cattle 3D</strong> takes players around the globe through three meticulously crafted environments that fundamentally change your combat and survival strategies:
                </p>
                <div className="grid grid-cols-1 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h3 className="text-xl font-semibold text-red-500 mb-2 font-cartoon">Ireland</h3>
                        <img
                            src="/assets/images/games/crazy-cattle-3d/ireland-map.webp"
                            alt="Crazy Cattle 3D Ireland Map"
                            className="rounded-lg shadow-sm mb-2 w-full h-auto"
                        />
                        <p className="text-gray-800">
                            Ireland's rolling hills provide natural ramps for gaining momentum and executing spectacular aerial attacks. This lush landscape offers the perfect environment for beginners to learn the basics of sheep movement in <strong>Crazy Cattle 3D</strong>. The unique seasonal change system makes this map present drastically different tactical values during different periods.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h3 className="text-xl font-semibold text-red-500 mb-2 font-cartoon">Iceland</h3>
                        <img
                            src="/assets/images/games/crazy-cattle-3d/iceland-map.webp"
                            alt="Crazy Cattle 3D Iceland Map"
                            className="rounded-lg shadow-sm mb-2 w-full h-auto"
                        />
                        <p className="text-gray-800">
                            Iceland's volcanic landscape introduces hazardous zones that can trap unwary sheep or be used strategically to eliminate opponents. <strong>Crazy Cattle 3D</strong>'s Iceland map is a challenging environment with dramatic elevation changes and unpredictable terrain effects. Random eruption events add an extra layer of strategy.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h3 className="text-xl font-semibold text-red-500 mb-2 font-cartoon">New Zealand</h3>
                        <img
                            src="/assets/images/games/crazy-cattle-3d/newzealand-map.webp"
                            alt="Crazy Cattle 3D New Zealand Map"
                            className="rounded-lg shadow-sm mb-2 w-full h-auto"
                        />
                        <p className="text-gray-800">
                            New Zealand's mountainous terrain offers vertical gameplay with high-risk, high-reward vantage points. Experienced <strong>Crazy Cattle 3D</strong> players will find optimal strategic routes in this complex environment. Secret cave systems offer additional tactical options.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h3 className="text-xl font-semibold text-red-500 mb-2 font-cartoon">Lunar Base (Coming Soon)</h3>
                        <div className="p-12 bg-gray-200 flex items-center justify-center rounded-lg mb-2">
                            <p className="text-lg text-gray-500 italic">Coming soon in Crazy Cattle 3D update</p>
                        </div>
                        <p className="text-gray-800">
                            <strong>Crazy Cattle 3D</strong>'s upcoming Lunar Base map will revolutionize gameplay, introducing low gravity environments, space equipment, and interstellar obstacles. This groundbreaking environment will bring a whole new dimension to strategy and skill. Get ready, space sheep are coming!
                        </p>
                    </div>
                </div>
                <div className="my-6 flex justify-center">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/3gPDBeX4ia8?si=Pa1OS7JnVwxixnHI"
                        title="Crazy Cattle 3D Gameplay"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg shadow-md"
                    ></iframe>
                </div>
            </section>

            {/* Game Controls and Gameplay Guide */}
            <section className="mb-8">
                <h2
                    className="text-2xl font-bold text-red-600 mb-4 font-cartoon"
                >
                    Controls & Gameplay Guide
                </h2>
                <h3
                    className="text-xl font-semibold text-red-500 mb-2"
                >
                    Desktop Controls
                </h3>
                <ul className="list-disc list-inside text-gray-800 space-y-2 mb-4">
                    <li>
                        <span className="font-bold">Movement:</span> Arrow keys or WASD
                    </li>
                    <li>
                        <span className="font-bold">Charge:</span> Hold left click or spacebar
                    </li>
                    <li>
                        <span className="font-bold">Jump:</span> Press E key
                    </li>
                    <li>
                        <span className="font-bold">Special Moves:</span> Press Q for special attacks
                    </li>
                </ul>
                <h3
                    className="text-xl font-semibold text-red-500 mb-2 font-cartoon"
                >
                    Mobile Controls
                </h3>
                <ul className="list-disc list-inside text-gray-800 space-y-2 mb-4">
                    <li>
                        <span className="font-bold">Movement:</span> Touch and drag to move
                    </li>
                    <li>
                        <span className="font-bold">Charge:</span> Tap and hold the charge button
                    </li>
                    <li>
                        <span className="font-bold">Jump:</span> Tap the jump button
                    </li>
                    <li>
                        <span className="font-bold">Special Moves:</span> Tap the special move button
                    </li>
                </ul>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mb-4">
                    <h4 className="font-bold text-red-600 mb-2">Crazy Cattle 3D Pro Tip</h4>
                    <p className="text-gray-800">
                        The secret to becoming a <strong>Crazy Cattle 3D</strong> master is mastering momentum control. By establishing a momentum chain through consecutive collisions, then maintaining charge until the optimal release moment, you can achieve maximum explosive power. This advanced technique is the key differentiator between novice and expert players.
                    </p>
                </div>
            </section>

            {/* Advanced Strategy Tips */}
            <section className="mb-8">
                <h2
                    className="text-2xl font-bold text-red-600 mb-4 font-cartoon"
                >
                    Advanced Strategy Tips
                </h2>
                <h3
                    className="text-xl font-semibold text-red-500 mb-2 font-cartoon"
                >
                    Sheep Movement Techniques
                </h3>
                <ul className="list-disc list-inside text-gray-800 space-y-2 mb-4">
                    <li>
                        <span className="font-bold">Master the art of sheep locomotion:</span> In <strong>Crazy Cattle 3D</strong>, building momentum downhill to gain speed advantage is key to victory
                    </li>
                    <li>
                        <span className="font-bold">Perfect collision timing:</span> Use precise collision timing to escape danger or catch opponents off guard
                    </li>
                    <li>
                        <span className="font-bold">Develop spatial awareness:</span> Always know where other sheep are in <strong>Crazy Cattle 3D</strong>
                    </li>
                    <li>
                        <span className="font-bold">Angle optimization:</span> 45-degree impacts typically provide the best knockback effect, a signature technique of <strong>Crazy Cattle 3D</strong> experts
                    </li>
                </ul>
                <h3
                    className="text-xl font-semibold text-red-500 mb-2 font-cartoon"
                >
                    Tactical Positioning
                </h3>
                <ul className="list-disc list-inside text-gray-800 space-y-2 mb-4">
                    <li>
                        <span className="font-bold">Create strategic collisions:</span> Plan your attacks for maximum impact
                    </li>
                    <li>
                        <span className="font-bold">Learn to read the arena:</span> Identify safe zones and danger areas
                    </li>
                    <li>
                        <span className="font-bold">Leverage environmental advantages:</span> Adjust your tactics based on different map features
                    </li>
                    <li>
                        <span className="font-bold">Sheep psychology:</span> In <strong>Crazy Cattle 3D</strong>, predicting opponent behavior is central to advanced tactics
                    </li>
                </ul>
                <h3
                    className="text-xl font-semibold text-red-500 mb-2 font-cartoon"
                >
                    Advanced Strategy Advice
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-800 italic">
                        "On the Ireland map, utilize consecutive hills to establish a momentum chain for a huge advantage in your final leap. And on the Iceland map, don't underestimate the strategic value of volcano rim positions - they're both traps and weapons. The key to victory in <strong>Crazy Cattle 3D</strong> lies in understanding each map's unique physical properties." — Top player Peakgame
                    </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-600 mb-2">Crazy Cattle 3D Exclusive Tactic: Sheep Storm</h4>
                    <p className="text-gray-800">
                        In <strong>Crazy Cattle 3D</strong>, advanced players have developed a tactic called "Sheep Storm," forming centrifugal force by spinning rapidly in a circular pattern, then suddenly changing direction to send all nearby opponents flying. This tactic requires precise timing and control, but once mastered, it can change the tide of battle in an instant.
                    </p>
                </div>
            </section>

            {/* Technical Requirements and Compatibility */}
            <section className="mb-8">
                <h2
                    className="text-2xl font-bold text-red-600 mb-4 font-cartoon"
                >
                    Technical Requirements & Compatibility
                </h2>
                <h3
                    className="text-xl font-semibold text-red-500 mb-2 font-cartoon"
                >
                    Multi-Platform Support
                </h3>
                <ul className="list-disc list-inside text-gray-800 space-y-2 mb-4">
                    <li>
                        <span className="font-bold">Windows Version:</span> Compatible with Windows 10 and 11, <strong>Crazy Cattle 3D</strong> performs best on latest systems
                    </li>
                    <li>
                        <span className="font-bold">Mac Version:</span> Compatible with macOS 11 and later
                    </li>
                    <li>
                        <span className="font-bold">Linux Version:</span> Compatible with major Linux distributions
                    </li>
                    <li>
                        <span className="font-bold">Mobile Version:</span> <strong>Crazy Cattle 3D</strong> mobile version coming soon, supporting iOS and Android platforms
                    </li>
                </ul>
                <h3
                    className="text-xl font-semibold text-red-500 mb-2 font-cartoon"
                >
                    System Requirements
                </h3>
                <ul className="list-disc list-inside text-gray-800 space-y-2">
                    <li>4GB RAM</li>
                    <li>2GHz processor</li>
                    <li>500MB storage space</li>
                    <li>DirectX 11 compatible graphics card</li>
                    <li>Stable internet connection (for online multiplayer)</li>
                </ul>
            </section>

            {/* Community Highlights and Discussions */}
            <section className="mb-8">
                <h2
                    className="text-2xl font-bold text-red-600 mb-4 font-cartoon"
                >
                    Community Highlights & Discussions
                </h2>
                <h3
                    className="text-xl font-semibold text-red-500 mb-2 font-cartoon"
                >
                    Recent Hot Topics
                </h3>
                <ul className="list-disc list-inside text-gray-800 space-y-2 mb-4">
                    <li>
                        <span className="font-bold">Esports Potential:</span> Players eagerly await the addition of esports features and leaderboard systems to <strong>Crazy Cattle 3D</strong>
                    </li>
                    <li>
                        <span className="font-bold">Mobile Version Demand:</span> Strong community requests for <strong>Crazy Cattle 3D</strong> Android and iOS versions
                    </li>
                    <li>
                        <span className="font-bold">AI Behavior:</span> Players have discovered sheep AI will circle infinitely in certain situations
                    </li>
                    <li>
                        <span className="font-bold">New Map Speculation:</span> Source code analysis suggests possible chicken-themed new game content
                    </li>
                    <li>
                        <span className="font-bold">Global Competition System:</span> Developers are working on a <strong>Crazy Cattle 3D</strong> global competition system, to be released next quarter
                    </li>
                </ul>
                <h3
                    className="text-xl font-semibold text-red-500 mb-2 font-cartoon"
                >
                    Community Tips & Discoveries
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-800 mb-2">
                        <span className="font-bold">AI Loop Trick:</span> "After a while, AI sheep will start to circle infinitely. In <strong>Crazy Cattle 3D</strong>, you can exploit this by waiting until sheep aren't dying by themselves anymore and just nudge them while they're circling. When you hit them, they'll typically run out of the zone and die, or target another sheep, causing them to also die." — Player Peakgame
                    </p>
                    <p className="text-gray-800">
                        <span className="font-bold">Warning:</span> Multiple users report that unofficial websites may contain malicious content. It's recommended to download <strong>Crazy Cattle 3D</strong> only from the official itch.io page.
                    </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mt-4">
                    <h4 className="font-bold text-green-600 mb-2">Crazy Cattle 3D Exclusive Reveal: Developer Interview</h4>
                    <p className="text-gray-800">
                        In our exclusive interview, <strong>Crazy Cattle 3D</strong>'s lead developer revealed: "We're developing a revolutionary 'Sheep Evolution' system that will allow players to unlock temporary abilities during matches. These aren't permanent upgrades, but performance-based instant rewards, maintaining game balance while adding strategic depth. Additionally, our AI learning system is continuously collecting player data, making AI behavior more intelligent and human-like with each update."
                    </p>
                </div>
            </section>

            {/* Conclusion */}
            <section>
                <h2
                    className="text-2xl font-bold text-red-600 mb-4 font-cartoon"
                >
                    Conclusion
                </h2>
                <p className="text-gray-800">
                    <strong>Crazy Cattle 3D</strong> offers an unforgettable battle royale experience with its unique physics engine, explosive gameplay, and diverse environments. Whether you prefer strategic thinking or pure chaotic fun, this game has something for everyone. Master the control system, learn advanced techniques, explore different maps, and you'll find endless fun and challenges in this world of explosive sheep. Download <strong>Crazy Cattle 3D</strong> now, join this crazy battle royale, and see if you can be the last sheep standing!
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mt-4">
                    <h4 className="font-bold text-yellow-600 mb-2">Crazy Cattle 3D Future Outlook</h4>
                    <p className="text-gray-800">
                        According to the development roadmap, <strong>Crazy Cattle 3D</strong> will welcome more exciting updates, including new maps, customizable sheep characters, seasonal events, and arena mode. The development team is committed to making <strong>Crazy Cattle 3D</strong> an evergreen title in indie gaming, continuously optimizing the gaming experience based on community feedback. Stay tuned for the bright future of <strong>Crazy Cattle 3D</strong>!
                    </p>
                </div>
            </section>

            {/* Comments Section */}
            <section className="mt-12 border-t-2 border-gray-200 pt-8">
                <h2
                    className="text-2xl font-bold text-red-600 mb-6 font-cartoon"
                >
                    Comments
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-gray-600 mb-2">Viewing most recent comments (223 total) · <a href="#" className="text-blue-500 hover:underline">Next page</a> · <a href="#" className="text-blue-500 hover:underline">Last page</a></p>
                </div>

                <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-blue-600">879someone</span>
                            <span className="text-xs text-gray-500">2 minutes ago</span>
                        </div>
                        <p className="text-gray-800">yo hop on <strong>Crazy Cattle 3D</strong>!</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-red-600">Those Who Know</span>
                            <span className="text-xs text-gray-500">23 minutes ago</span>
                        </div>
                        <p className="text-gray-800">Mine <strong>Crazy Cattle 3D</strong> doesn't even try to open it just closes after a while🥀</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-blue-600">somerandomyapper</span>
                            <span className="text-xs text-gray-500">41 minutes ago</span>
                        </div>
                        <p className="text-gray-800">why do ALOT of <strong>Crazy Cattle 3D</strong> "Fans" just play some browser port?!?!? the game is only like 110 megabytes</p>
                        <div className="mt-2 text-xs text-gray-500">+1</div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-blue-600">somerandomyapper</span>
                            <span className="text-xs text-gray-500">40 minutes ago</span>
                        </div>
                        <p className="text-gray-800">like dude it says <span className="font-bold">"NO SITES OTHER THAN THIS ITCH.IO SITE ARE OFFICIAL. I DO NOT ENDORSE ANY THIRD PARTY HOSTS. ALL RIGHTS RESERVED"</span></p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-green-600">EliSSGames</span>
                            <span className="text-xs text-gray-500">42 minutes ago</span>
                        </div>
                        <p className="text-gray-800">truly the peak of entertainment</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-purple-600">zoobsman</span>
                            <span className="text-xs text-gray-500">43 minutes ago</span>
                        </div>
                        <p className="text-gray-800">phenomenar</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-yellow-600">IntelectualOrb</span>
                            <span className="text-xs text-gray-500">46 minutes ago</span>
                        </div>
                        <p className="text-gray-800">you can press ctrl+shift+end to activate the debug win, theres also a weird secret debug map that i found but you need to mod the game to enter it</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-yellow-600">IntelectualOrb</span>
                            <span className="text-xs text-gray-500">38 minutes ago</span>
                        </div>
                        <p className="text-gray-800">i also made speed and win hacks for the game, and custom maps</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-indigo-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-indigo-600">subbe1244</span>
                            <span className="text-xs text-gray-500">58 minutes ago</span>
                        </div>
                        <p className="text-gray-800">please add microtransactions and gambling</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-pink-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-pink-600">mrlishies</span>
                            <span className="text-xs text-gray-500">1 hour ago</span>
                        </div>
                        <p className="text-gray-800">please add multiplayer im begging</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-gray-600">hillowed666</span>
                            <span className="text-xs text-gray-500">1 hour ago</span>
                        </div>
                        <p className="text-gray-800">when i open the game, it doesnt</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-green-600">CrazyCattle3DSkibidi</span>
                            <span className="text-xs text-gray-500">1 hour ago</span>
                        </div>
                        <p className="text-gray-800">my friend made hacks i can send link</p>
                        <div className="mt-2 text-xs text-gray-500">+1</div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-orange-600">ohiorightbite</span>
                            <span className="text-xs text-gray-500">1 hour ago</span>
                        </div>
                        <p className="text-gray-800">please send</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-blue-600">somerandomyapper</span>
                            <span className="text-xs text-gray-500">45 minutes ago</span>
                        </div>
                        <p className="text-gray-800">why💔</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-teal-600">aimbotek420</span>
                            <span className="text-xs text-gray-500">1 hour ago</span>
                        </div>
                        <p className="text-gray-800">was looking through the source code and it seems we might have a chicken game soon<br /><br />also the official itch.io site is on the bottom of the page when you search crazycattle now, many of those websites popped up in 2 days</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-teal-600">aimbotek420</span>
                            <span className="text-xs text-gray-500">1 hour ago</span>
                        </div>
                        <p className="text-gray-800">that FAQ of that website is completely ai generated too lmao</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-gray-600">serrgef</span>
                            <span className="text-xs text-gray-500">1 hour ago</span>
                        </div>
                        <p className="text-gray-800">peak</p>
                        <div className="mt-2 text-xs text-gray-500">+1</div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-green-600">MarPlays</span>
                            <span className="text-xs text-gray-500">2 hours ago</span>
                        </div>
                        <p className="text-gray-800">CRAZY CATTLE 3D???</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-blue-600">NoobSmoke1144</span>
                            <span className="text-xs text-gray-500">3 hours ago</span>
                        </div>
                        <p className="text-gray-800">make more levels please</p>
                        <div className="mt-2 text-xs text-gray-500">+1</div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-purple-600">2070name</span>
                            <span className="text-xs text-gray-500">4 hours ago</span>
                        </div>
                        <p className="text-gray-800">i cried</p>
                        <div className="mt-2 text-xs text-gray-500">+1</div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-red-600">67rtyudj</span>
                            <span className="text-xs text-gray-500">1 hour ago</span>
                        </div>
                        <p className="text-gray-800"><strong>a tear ran down my leg</strong></p>
                        <div className="mt-2 text-xs text-gray-500">+1</div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-green-600">RazerRene360</span>
                            <span className="text-xs text-gray-500">4 hours ago</span>
                        </div>
                        <p className="text-gray-800">this is the most beautiful game ever. The story is soo.... captivating... the sheep have such interesting lore this simply is.. peak</p>
                        <div className="mt-2 text-xs text-gray-500">+1</div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-pink-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-pink-600">plash978</span>
                            <span className="text-xs text-gray-500">4 hours ago</span>
                        </div>
                        <p className="text-gray-800">make it less laggy plssssssssssssssssss</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-purple-600">supersockhead</span>
                            <span className="text-xs text-gray-500">5 hours ago</span>
                        </div>
                        <p className="text-gray-800">AWESOME.....</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-blue-600">Apodim</span>
                            <span className="text-xs text-gray-500">6 hours ago</span>
                        </div>
                        <p className="text-gray-800">With what game engine is that made?</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-yellow-600">postal_S3</span>
                            <span className="text-xs text-gray-500">5 hours ago</span>
                        </div>
                        <p className="text-gray-800">godot engine pretty sure</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-green-600">cv</span>
                            <span className="text-xs text-gray-500">3 hours ago</span>
                        </div>
                        <p className="text-gray-800">specifically godot 4.4.1</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-orange-600">sarppuli</span>
                            <span className="text-xs text-gray-500">6 hours ago</span>
                        </div>
                        <p className="text-gray-800">pls add esports</p>
                        <div className="mt-2 text-xs text-gray-500">+1</div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-green-600">Exgotik</span>
                            <span className="text-xs text-gray-500">7 hours ago</span>
                        </div>
                        <p className="text-gray-800">Add android port cro pleasss😝😝</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-red-600">My0ndre</span>
                            <span className="text-xs text-gray-500">7 hours ago</span>
                        </div>
                        <p className="text-gray-800">I FUCKING LOVE CRAZY CATTLE 3D HOLY SHIT I FUCKING BEAT THE SHIT OUT OF THIS FUCKING GAME AFTER 3 HOURS I FUCKING LOVE THIS GAME FUCKING PLAYTHIS I LOVE CRAZY CATTLE I WILL HAVE CRAZY CATTLE BURNT INTO MY RETENAS SLEEPING TODAY THIS WAS MADE AT 3:22 AM WITH A FRIEND IN VC SCREENSHARING IM SO GOOD IM SOO GOOOOOOD GODDDDDDDDDDD I FUCKING LOVE THIS GAME FUCK CRAZY CATTLE 3D WOOOOOOOOOOOOOOOOOOOOOOOOOO YEAH BABY YEAH</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-blue-600">Dominic84p</span>
                            <span className="text-xs text-gray-500">8 hours ago</span>
                        </div>
                        <p className="text-gray-800">tried playing this online and saw the most disgusting porn pop up ever</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-teal-600">Turniphead1</span>
                            <span className="text-xs text-gray-500">6 hours ago</span>
                        </div>
                        <p className="text-gray-800">And that's why you use itch.io 💔💔💔🥀</p>
                        <div className="mt-2 text-xs text-gray-500">+1</div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-orange-600">sarppuli</span>
                            <span className="text-xs text-gray-500">8 hours ago</span>
                        </div>
                        <p className="text-gray-800">pls more levels and multiplayer, i already finished this game</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-orange-600">sarppuli</span>
                            <span className="text-xs text-gray-500">8 hours ago</span>
                        </div>
                        <p className="text-gray-800">and esports</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-indigo-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-indigo-600">rip1431HP</span>
                            <span className="text-xs text-gray-500">8 hours ago</span>
                        </div>
                        <p className="text-gray-800">elite goon material 10/10</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-green-600">MotivatedMan</span>
                            <span className="text-xs text-gray-500">8 hours ago</span>
                        </div>
                        <p className="text-gray-800">Make an android port of this masterpiece please</p>
                        <div className="mt-2 text-xs text-gray-500">+1</div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-yellow-600">loottthatboy</span>
                            <span className="text-xs text-gray-500">9 hours ago</span>
                        </div>
                        <p className="text-gray-800">IM FUCKINV BEGGING YOU TO MAKE A MOBILE VERSION</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-400">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-purple-600">Binehoad</span>
                            <span className="text-xs text-gray-500">10 hours ago</span>
                        </div>
                        <p className="text-gray-800">Someone remake this on roblox for multiplayer 🙏🙏</p>
                    </div>
                </div>

                <div className="mt-6 flex justify-center">
                    <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition">
                        Load More Comments
                    </button>
                </div>

                <div className="mt-8 bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-red-600 mb-2">Leave a Comment</h3>
                    <p className="text-gray-600 text-sm mb-4">Log in to leave a comment.</p>
                    <button className="bg-gray-800 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-900 transition">
                        Log in
                    </button>
                </div>
            </section>
        </article>
    );
};

export default CrazyCattle3D; 