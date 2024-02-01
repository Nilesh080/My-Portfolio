import React from 'react';

import './css/achievement.css';

class Achievement extends React.Component {
    render() {
        return(
            <section id="achievements">
                <h2>Milestones I Have Achieved</h2>
                <h1>My Timeline</h1>

                <div className="timeline">
                    <div className="timeline__card left">
                        <div className="timeline__content">
                            <h2>2022</h2>
                            <h3>Solved 500+ DSA questions </h3>
                        </div>
                    </div>
                    <div className="timeline__card right">
                        <div className="timeline__content">
                            <h2>2023</h2>
                            <h3>Secured Leetcode Rating of 1665</h3>
                        </div>
                    </div>
                    <div className="timeline__card left">
                        <div className="timeline__content">
                            <h2>2023</h2>
                            <h3>Global Rank of 271 out of 27k+ participants in Codechef Starter 115 Contest</h3>
                        </div>
                    </div>
                    <div className="timeline__card right">
                        <div className="timeline__content">
                            <h2>2023</h2>
                            <h3>🟢Pupil status && 300+ Problems solved on codeforces</h3>
                        </div>
                    </div>
                    <div className="timeline__card left">
                        <div className="timeline__content">
                            <h2>2023</h2>
                            <h3>Rank #2 in Maker's den, XIE</h3>
                        </div>
                    </div>
                    <div className="timeline__card right">
                        <div className="timeline__content">
                            <h2>2023</h2>
                            <h3>Rank #4 in IBM-SkillBuild Pitch Night</h3>
                        </div>
                    </div>
                    <div className="timeline__card left">
                        <div className="timeline__content">
                            <h2>2024</h2>
                            <h3>Global Rank #2692 in Codeforces Round 918 Contest</h3>
                        </div>
                    </div>
                    <div className="timeline__card right">
                        <div className="timeline__content">
                            <h2>2024</h2>
                            <h3>Became 3⭐ Coder on Codechef</h3>
                        </div>
                    </div>
                    <div className="timeline__card left">
                        <div className="timeline__content">
                            <h2>2024</h2>
                            <h3>Global Rank #4003 out of 40k+ participants in HELLO 2024 Codeforces Contest</h3>
                        </div>
                    </div>
                    <div className="timeline__card right">
                        <div className="timeline__content">
                            <h2>2024</h2>
                            <h3>1000+ DSA questions solved over different platform</h3>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Achievement;