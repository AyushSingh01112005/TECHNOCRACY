import React, { useEffect, useState } from "react";
import RandomSpider from "../components/RedSpidy";
import SpiderCrawler from "../components/BlackSvg";
import SpiderCrawler2 from "../components/BlackSpider2";

const CRAWLER_COUNT = 20;
const CRAWLER2_COUNT = 20;
const RED_SPIDER_COUNT = 5;

const getSpreadPositions = (count) => {
    const positions = [];

    const columns = Math.ceil(Math.sqrt(count));
    const rows = Math.ceil(count / columns);

    for (let i = 0; i < count; i++) {
        const column = i % columns;
        const row = Math.floor(i / columns);

        const cellWidth = 100 / columns;
        const cellHeight = 100 / rows;

        const x =
            column * cellWidth +
            Math.random() * cellWidth;

        const y =
            row * cellHeight +
            Math.random() * cellHeight;

        positions.push({ x, y });
    }

    return positions.sort(() => Math.random() - 0.5);
};

const Loading = () => {
    const [crawlerPositions, setCrawlerPositions] = useState(
        () => getSpreadPositions(CRAWLER_COUNT)
    );

    const [crawler2Positions, setCrawler2Positions] = useState(
        () => getSpreadPositions(CRAWLER2_COUNT)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCrawlerPositions(getSpreadPositions(CRAWLER_COUNT));
            setCrawler2Positions(getSpreadPositions(CRAWLER2_COUNT));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden   pointer-events-none">

            {/* SpiderCrawler */}
            {crawlerPositions.map((position, index) => (
                <div
                    key={`crawler-${index}`}
                    className="absolute"
                    style={{
                        left: `${position.x}%`,
                        top: `${position.y}%`,
                        transform: "translate(-50%, -50%)",
                        transition:
                            "left 1s ease-in-out, top 1s ease-in-out",
                    }}
                >
                    <SpiderCrawler />
                </div>
            ))}

            {/* SpiderCrawler2 */}
            {crawler2Positions.map((position, index) => (
                <div
                    key={`crawler2-${index}`}
                    className="absolute"
                    style={{
                        left: `${position.x}%`,
                        top: `${position.y}%`,
                        transform: "translate(-50%, -50%)",
                        transition:
                            "left 1s ease-in-out, top 1s ease-in-out",
                    }}
                >
                    <SpiderCrawler2 />
                </div>
            ))}

            {/* Red Spiders */}
            {Array.from({ length: RED_SPIDER_COUNT }).map((_, index) => (
                <RandomSpider key={`red-${index}`} />
            ))}

            {/* CENTER LOADING */}
            <div className="absolute inset-0 flex items-center justify-center z-50">
                <div className="text-white text-4xl font-bold tracking-[0.3em] animate-pulse">
                    LOADING...
                </div>
            </div>

        </div>
    );
};

export default Loading;