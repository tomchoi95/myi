import React from "react";
import "./DetailCSS.css";
import "../Header.css";
import { useInView } from "react-intersection-observer";
import "../ScrollView/ScrollView.css";
import { useNavigate, useLocation } from "react-router-dom";
import DailyStatistic from '../StatisticDetail/DailyStatistic';
import WeeklyStatistic from '../StatisticDetail/WeeklyStatistic';
import ChartDetail from '../StatisticDetail/ChartDetail';
import GrowChart from '../StatisticDetail/GrowChart';
import SharePDF from '../StatisticDetail/SharePDF';

function StatisticsDetail() {
    const location = useLocation();
    const currentPath = location.pathname;
    const navigate = useNavigate();
    
        const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0,
        });
        console.log("inView:", inView);
        return (
            <div className="detail-container">
                <header className={"detail-header"}>
                    <div className="logo" onClick={() => window.location.href = "/"}>
                        <img src="/images/logo.png" alt="logo" className="logo-image" />
                        <span>My i</span>
                    </div>
                    <div className="header-buttons">
                    <button className={`header-button ${currentPath === "/record" ? "active" : ""}`} onClick={() => navigate("/record")}>육아 기록</button>
                    <button className={`header-button ${currentPath === "/calendar" ? "active" : ""}`} onClick={() => navigate("/calendar")}>육아 수첩</button>
                    <button className={`header-button ${currentPath === "/voicerecord" ? "active" : ""}`} onClick={() => navigate("/voicerecord")}>울음 분석</button>
                    <button className={`header-button ${currentPath === "/statistic" ? "active" : ""}`} onClick={() => navigate("/statistic")}>기록 분석</button>
                    <button className={`header-button ${currentPath === "/other" ? "active" : ""}`} onClick={() => navigate("/other")}>더보기</button>
                    </div>
                </header>
                <div
                ref={ref}
                className={`scroll-view-container ${inView ? "fade-up" : "fade-init"}`}
            >
                <div className="detail-grid">
                <div>
                <DailyStatistic />
                </div>
                <div>
                <WeeklyStatistic />
                </div>
                <div>
                <ChartDetail />
                </div>
                <div>
                <GrowChart />
                </div>
                <div>
                <SharePDF />
                </div>
            </div>
    
            </div>
            </div>
        );
}

export default StatisticsDetail;
