/**
 * Interactive Admin Panel Dashboard Engine
 * Muhammad Mubashir Farooq - Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
    initAdminDashboard();
});

function initAdminDashboard() {
    const sqlInput = document.getElementById('sql-input');
    const runBtn = document.getElementById('run-sql-btn');
    const sqlOutputContainer = document.getElementById('sql-output-container');
    const presetBtns = document.querySelectorAll('.sql-preset-btn');
    const toggleScraperBtn = document.getElementById('toggle-scraper-btn');
    const logConsole = document.getElementById('log-console');

    // Preset Queries Dataset
    const sampleData = {
        thermorail: {
            sql: "SELECT track_id, thermal_stress_c, buckling_risk_level, speed_restriction_kmh FROM thermorail_logs WHERE temp > 40 ORDER BY timestamp DESC LIMIT 4;",
            columns: ["Track ID", "Thermal Temp (°C)", "Risk Level", "Speed Limit (km/h)", "Alert Status"],
            rows: [
                ["TRK-784-A", "48.2 °C", "<span class='badge badge-amber'>CRITICAL</span>", "30 km/h", "TRIGGERED"],
                ["TRK-784-B", "46.7 °C", "<span class='badge badge-amber'>HIGH</span>", "45 km/h", "TRIGGERED"],
                ["TRK-912-C", "42.1 °C", "<span class='badge badge-cyan'>MODERATE</span>", "60 km/h", "MONITORING"],
                ["TRK-104-D", "41.5 °C", "<span class='badge badge-cyan'>MODERATE</span>", "60 km/h", "MONITORING"]
            ]
        },
        scraping: {
            sql: "SELECT job_id, target_domain, pages_scraped, extract_rate_sec, status FROM scraping_pipeline WHERE status = 'ACTIVE';",
            columns: ["Job ID", "Target Domain", "Pages Extracted", "Rate (req/s)", "Status"],
            rows: [
                ["JOB-9942", "market-data-hub.com", "14,820", "28.4 /s", "<span class='badge badge-emerald'>RUNNING</span>"],
                ["JOB-9943", "climate-spatial-index.org", "8,310", "14.2 /s", "<span class='badge badge-emerald'>RUNNING</span>"],
                ["JOB-9944", "ecom-catalog-node.net", "42,100", "45.0 /s", "<span class='badge badge-cyan'>SYNCING</span>"]
            ]
        },
        ecommerce: {
            sql: "SELECT order_id, customer_hash, total_amount_usd, db_transaction_time_ms, payment_status FROM ecommerce_orders ORDER BY created_at DESC LIMIT 4;",
            columns: ["Order Ref", "Customer Hash", "Total ($)", "DB Latency (ms)", "Payment"],
            rows: [
                ["ORD-88192", "usr_99a8x72", "$249.50", "4.2 ms", "<span class='badge badge-emerald'>PAID</span>"],
                ["ORD-88193", "usr_12f9k90", "$1,120.00", "3.8 ms", "<span class='badge badge-emerald'>PAID</span>"],
                ["ORD-88194", "usr_77c2m11", "$89.99", "5.1 ms", "<span class='badge badge-emerald'>PAID</span>"],
                ["ORD-88195", "usr_33b4v55", "$435.00", "4.0 ms", "<span class='badge badge-emerald'>PAID</span>"]
            ]
        },
        db_audit: {
            sql: "SELECT client_addr, state, query_latency_ms, active_queries FROM pg_stat_activity WHERE state = 'active';",
            columns: ["Client Host", "State", "Query Latency", "Active Thread", "Engine"],
            rows: [
                ["192.168.1.104:5432", "active", "1.2 ms", "thermorail_ingest_worker", "PostgreSQL"],
                ["192.168.1.108:5432", "active", "2.4 ms", "scraping_etl_sync", "PostgreSQL"],
                ["192.168.1.112:5432", "active", "0.8 ms", "admin_dashboard_query", "PostgreSQL"]
            ]
        }
    };

    // Execute SQL Simulation Function
    function executeSQL(queryKey) {
        let dataset = sampleData[queryKey];
        
        if (!dataset) {
            // Default query execution for custom query
            const customQuery = sqlInput.value;
            dataset = {
                sql: customQuery,
                columns: ["Query Execution", "Matched Rows", "Status", "Duration"],
                rows: [
                    ["EXPLAIN ANALYZE SELECT *", "128 records matched", "<span class='badge badge-emerald'>SUCCESS</span>", "2.14 ms"]
                ]
            };
        } else {
            sqlInput.value = dataset.sql;
        }

        // Render Table
        let tableHTML = `
            <table class="data-table">
                <thead>
                    <tr>
                        ${dataset.columns.map(col => `<th>${col}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${dataset.rows.map(row => `
                        <tr>
                            ${row.map(cell => `<td>${cell}</td>`).join('')}
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;

        sqlOutputContainer.innerHTML = tableHTML;
        
        // Append log entry
        addConsoleLog(`[SQL EXEC] Executed query in 2.1ms. Returned ${dataset.rows.length} rows.`, 'success');
    }

    // Event Listeners for Presets
    presetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const presetKey = btn.getAttribute('data-preset');
            executeSQL(presetKey);
        });
    });

    if (runBtn) {
        runBtn.addEventListener('click', () => {
            executeSQL('custom');
        });
    }

    if (sqlInput) {
        sqlInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                executeSQL('custom');
            }
        });
    }

    // Initial SQL Load
    executeSQL('thermorail');

    // Scraper Pipeline Toggle & Live Simulation
    let scraperActive = true;
    if (toggleScraperBtn) {
        toggleScraperBtn.addEventListener('click', () => {
            scraperActive = !scraperActive;
            if (scraperActive) {
                toggleScraperBtn.innerHTML = `<i class="lucide-pause"></i> Pause Pipeline`;
                toggleScraperBtn.className = "btn btn-outline btn-sm";
                addConsoleLog(`[SCRAPER] Pipeline RESUMED. Extracting targets...`, 'info');
            } else {
                toggleScraperBtn.innerHTML = `<i class="lucide-play"></i> Resume Pipeline`;
                toggleScraperBtn.className = "btn btn-emerald btn-sm";
                addConsoleLog(`[SCRAPER] Pipeline PAUSED by Administrator.`, 'warn');
            }
        });
    }

    // Live Metrics Telemetry Simulation
    setInterval(() => {
        const dbConnElem = document.getElementById('metric-db-conn');
        const latencyElem = document.getElementById('metric-latency');
        const rateElem = document.getElementById('metric-rate');

        if (dbConnElem) {
            const randomConn = Math.floor(Math.random() * 8) + 38;
            dbConnElem.innerText = `${randomConn} Pool Conns`;
        }

        if (latencyElem) {
            const randomLatency = (Math.random() * 1.5 + 1.2).toFixed(1);
            latencyElem.innerText = `${randomLatency} ms`;
        }

        if (rateElem && scraperActive) {
            const randomRate = Math.floor(Math.random() * 150) + 1420;
            rateElem.innerText = `${randomRate.toLocaleString()} req/m`;
        }
    }, 3000);

    // Dynamic Live Console Log Simulation
    const randomLogEvents = [
        "Ingested 250 sensor telemetry frames from ThermoRail node TRK-784",
        "Calculated heat stress coefficient: 0.84 (Safe Threshold < 0.90)",
        "Database connection pool health check: OK (38 active, 0 idle locks)",
        "Web Scraping Worker #3 completed pagination crawling (Target: domain_ext)",
        "SQL Query optimizer refreshed indexing statistics for table 'railway_metrics'",
        "Sanitized and normalized 1,200 raw data payload entries into PostgreSQL"
    ];

    setInterval(() => {
        if (scraperActive && Math.random() > 0.4) {
            const randomMsg = randomLogEvents[Math.floor(Math.random() * randomLogEvents.length)];
            addConsoleLog(`[SYSTEM LOG] ${randomMsg}`, 'info');
        }
    }, 4500);

    function addConsoleLog(msg, type = 'info') {
        if (!logConsole) return;
        const now = new Date().toTimeString().split(' ')[0];
        let tagClass = 'log-tag-info';
        if (type === 'success') tagClass = 'log-tag-success';
        if (type === 'warn') tagClass = 'log-tag-warn';

        const line = document.createElement('div');
        line.className = 'log-line';
        line.innerHTML = `<span class="log-time">[${now}]</span> <span class="${tagClass}">${type.toUpperCase()}</span> ${msg}`;
        logConsole.prepend(line);

        if (logConsole.children.length > 20) {
            logConsole.removeChild(logConsole.lastChild);
        }
    }
}
