# green-lense
Green lense is a mobile app to classify garbage using YOLO ML model  and simplify waste management

# Green-lense: mobile App for waste management

"Green-lense" is an academical project for Environmental management system, Industrial Engineering : Artificial Intelligence specialty, inside the ENSAM Meknes, made by Salma Kassimi, Oumayma Tajir and Chaimae Elhajoubi, 5th year student and supervised by Bouhaddou Imane.
"Green-lense" is a mobile app built with React Native and Expo CLI. The app allows users to classify the garbage from pictures taken instantly, using a model trained using YOLO v5.

## Prerequisites
-   Node.js
-   Expo CLI
-   Python 3.8+

## Installation
### For the backend 

 1. Create a virtual environment with conda, run the following command:
```bash
conda create -n env_name python=3.8
```


 2. Activate the environment with:
 ```bash
conda activate env_name
```
 3. Install the required Python packages with pip:
 ```bash
pip install -r requirements.txt
```
 4. Navigate to the `backend` directory of the project.
 5. Run the following command to start the backend server:
  ```bash
uvicorn main:app --reload
```

### For the frontend

1.  Install the Expo CLI by running the following command:

```bash
npm install -g expo-cli
```

2.  Navigate to the `frontend` directory of the project.
3.  Install the required npm packages by running the following command:

  ```bash
 npm install
```
     
4.  Run the following command to start the Expo development server:

  ```bash
expo start
```

5.  Open the Expo app on your mobile device and scan the QR code shown in the terminal or in the browser. This will open the "Green lense" app in the Expo app.







## License

[MIT](https://choosealicense.com/licenses/mit/)

