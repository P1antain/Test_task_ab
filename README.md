# Тестовое задание 
> В директории лежит 2 папки, фронт и бэк, для доступа к полной функциональности необходимо клонировать репозиторий к себе 
>> git clone `https://github.com/P1antain/Test_task_ab.git`

## Порядок установки
1. В папке back -> `npm install` 
2. В папке front -> `npm install`

## Функционал приложения
1. Frontend -> Добавляет пользователей и позволяет считать Rolling Retention пользователей и выводить график их активности, в данной версии стоит бинд на 7 дней, его можно изменить на любое количество дней изменив переменную `numberDate` и добавив графику возможность скролла. При взаимодействие с backendom позволяет сохранять пользвателей и удалять их
2. Backend -> Сохраняет массив пользователей, возвращает их и удалят

### Cтэк:
>Frontend
>> React + Redux, axios, React Hook Form, normalize, recharts

>Backend
>> express, mongodb


###Запуск : 
1. backend -> `npm start` (localhost: 3000)
2. frontend -> `npm start` (localhost: 3001)
