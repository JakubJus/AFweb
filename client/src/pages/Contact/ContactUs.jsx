.box {
    padding: 0 5% 4% 5%;
    /* Adjust the value as per your requirement */
}

.form-group {
    position: relative;
    margin-bottom: 3%;
}

.form-label {
    position: absolute;
    top: 50%;
    left: 1%;
    transform: translateY(-50%);
    color: #d76060;
    font-size: 100%;
    pointer-events: none;
    transition: top 0.3s, left 0.3s, font-size 0.3s;
}

input:focus+.form-label,
textarea:focus+.form-label,
input:not(:placeholder-shown)+.form-label {
    top: -2%;
    left: 1%;
    font-size: 12px;
}

input,
textarea {
    width: 100%;
    padding: 1%;
    border: 1px solid #19129a;
    border-radius: 5px;
}

textarea {
    resize: vertical;
}

textarea:not(:focus):not(:placeholder-shown)+.form-label {
    display: none;
}

button {
    background-color: #4caf50;
    color: white;
    padding: 1% 2%;
    border: none;
    border-radius: 1%;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #45a049;
}
