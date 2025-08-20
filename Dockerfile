# Use the official PostgreSQL image from Docker Hub
FROM postgres:15

# Set environment variables for PostgreSQL user, password, and database
ENV POSTGRES_USER=ArifaMedYassine	
ENV POSTGRES_PASSWORD=Imbus
ENV POSTGRES_DB=LocalDB

# Expose the PostgreSQL port
EXPOSE 5432

