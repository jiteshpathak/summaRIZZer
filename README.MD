# summaRIZZer

summaRIZZer is a web application that summarizes text using the Hugging Face API. Users can input a large block of text, and the app will return a concise summary of the content.

## Features

- Summarize large blocks of text
- Responsive UI
- Uses Hugging Face API for text summarization

## Technologies Used

- Node.js
- Express.js
- Axios
- HTML/CSS
- JavaScript

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jiteshpathak/summaRIZZer.git
   cd summaRIZZer
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Hugging Face API access token:
   ```bash
   ACCESS_TOKEN=your_huggingface_access_token
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Enter the text you want to summarize in the input text area.
2. Click the "Submit" button.
3. View the summarized text in the output text area.

## Project Structure

- `server.js`: Main server file
- `public/`: Contains HTML, CSS, and client-side JavaScript files
- `package.json`: Contains project metadata and dependencies
- `.env`: Contains environment variables (not included in the repo for security reasons)

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgements

- Hugging Face for their text summarization API
- Axios for HTTP requests
- Express.js for server framework

## Contact

For any questions or suggestions, feel free to reach out to me at pathak.jitesh@gmail.com

