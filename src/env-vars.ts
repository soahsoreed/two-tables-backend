export const taskManagerUrl = process.env.TASK_MANAGER_URL || 'http://10.90.26.73:3001';
export const taskManagerApiKey = process.env.TASK_MANAGER_API_KEY || 'classnay_key_sdelan_secret4343';
export const port = process.env.PORT || 3010;
export const workerId = process.env.TASK_MANAGER_WORKER_ID || 'ReportBuilder';
export const workerName = process.env.TASK_MANAGER_WORKER_NAME || 'Конструктор отчётов';
export const N8N_URL_GENERATE_REPORT = process.env.N8N_URL_GENERATE_REPORT || 'http://localhost:8176/webhook/create-report';
export const LOG_LEVEL = process.env.LOG_LEVEL || 'debug';

export const PG_USER = process.env.PG_USER || 'postgres';
export const PG_HOST = process.env.PG_HOST || '10.90.26.15';
export const PG_NAME = process.env.PG_NAME || 'postgres';
export const PG_PASSWORD = process.env.PG_PASSWORD || 'postgres123';
export const PG_PORT = process.env.PG_PORT || '5432';

