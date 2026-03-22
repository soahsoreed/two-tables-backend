# backend/Dockerfile

# Используем официальный образ Node.js как базовый
FROM node:22.1.0

# Создаем рабочую директорию
WORKDIR /app-builded

# Копируем package.json и package-lock.json в рабочую директорию
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальную часть исходного кода
COPY . .

# Открываем порт
EXPOSE 3010

# Запускаем приложение
CMD ["npm", "run", "prod"]