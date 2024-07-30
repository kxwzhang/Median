# Use the official Ruby image for Ruby 2.5gem
FROM ruby:2.5.9

# Install dependencies
RUN apt-get update -y && \
    apt-get install -y \
      nodejs \
      postgresql-client \
      build-essential \
      libpq-dev \
    && apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /myapp

# Install Bundler 2
RUN gem install bundler -v '2.1.4'

# Install gems
COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock
RUN bundle install

# Copy the rest of the application code
COPY . /myapp

# Precompile assets (if needed)
RUN bundle exec rake assets:precompile

# Expose port
EXPOSE 3000

# Define the command to run the application
CMD ["rails", "server", "-b", "0.0.0.0"]
