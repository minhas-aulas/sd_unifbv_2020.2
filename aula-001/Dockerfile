FROM python:3.7

WORKDIR /app

COPY . /app

RUN pip install --trusted-host pypi.python.org -r requeriments.txt

EXPOSE 80

CMD [ "python", "app.py" ]