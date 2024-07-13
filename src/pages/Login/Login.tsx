import React, { useState } from "react";
import "./Login.css";
import focalX from './../../assets/images/login/FocalX_SVG.svg'
import logo1 from "../../assets/images/login/login_01.svg";
import logo2 from "../../assets/images/login/login_02.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const requestData = {
      user_name: username,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        requestData
      );
      console.log("Login successful", response.data);

      localStorage.setItem("token", response.data.access_token); 
      if (response.status === 200) {
        navigate("/");
      } else {
        setError("failed login");
        navigate("/login");
      }
    } catch (error) {
      console.log("error happened", error);
      setError(".Login failed... Please check your username and password");
    } 
  }
  return (
    <div className="ne-login">
      <div className="ne-background-img">
        <div className="user-img">
          <svg
            width="302"
            height="296"
            viewBox="0 0 302 296"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.25" filter="url(#filter0_f_1_16033)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M246.004 183.498C247.837 180.339 250.806 177.999 254.306 176.955C257.805 175.912 261.571 176.243 264.835 177.882C268.098 179.521 270.613 182.344 271.865 185.775C273.118 189.205 273.014 192.984 271.575 196.34L270.829 197.831L266.028 206.144C268.889 209.506 271.219 213.286 272.936 217.353L273.882 219.775H283.5C287.153 219.779 290.667 221.178 293.324 223.686C295.98 226.194 297.579 229.622 297.793 233.269C298.007 236.916 296.82 240.507 294.476 243.308C292.131 246.11 288.805 247.91 285.177 248.342L283.5 248.442H273.882C272.479 252.418 270.499 256.165 268.006 259.565L266.028 262.059L270.829 270.386C272.672 273.554 273.232 277.307 272.394 280.874C271.555 284.442 269.383 287.552 266.322 289.567C263.261 291.582 259.544 292.348 255.936 291.708C252.328 291.067 249.102 289.069 246.921 286.124L246.004 284.72L241.202 276.406C237.003 277.18 232.746 277.309 228.589 276.836L225.479 276.378L220.663 284.72C218.83 287.878 215.861 290.218 212.361 291.262C208.861 292.306 205.095 291.974 201.832 290.335C198.569 288.696 196.054 285.873 194.801 282.443C193.549 279.012 193.653 275.233 195.092 271.877L195.837 270.386L200.639 262.059C197.782 258.705 195.452 254.935 193.73 250.879L192.784 248.442H183.167C179.513 248.438 176 247.039 173.343 244.531C170.687 242.023 169.088 238.596 168.874 234.949C168.66 231.302 169.846 227.711 172.191 224.909C174.536 222.108 177.862 220.307 181.49 219.876L183.167 219.775H192.799C194.202 215.8 196.182 212.052 198.675 208.653L200.639 206.159L195.837 197.831C193.994 194.664 193.435 190.911 194.273 187.343C195.111 183.776 197.284 180.665 200.345 178.65C203.406 176.635 207.122 175.869 210.731 176.51C214.339 177.15 217.565 179.148 219.745 182.093L220.663 183.498L225.464 191.811C229.664 191.037 233.921 190.908 238.078 191.381L241.188 191.825L246.004 183.498ZM133 162.442C139.407 162.442 145.714 162.786 151.863 163.445C155.643 163.846 159.11 165.733 161.499 168.69C163.889 171.647 165.006 175.432 164.605 179.212C164.204 182.993 162.318 186.459 159.361 188.849C156.404 191.238 152.619 192.355 148.838 191.954C143.678 191.395 138.375 191.109 133 191.109C104.004 191.109 77.917 199.565 59.384 210.874C50.1103 216.522 43.1157 222.656 38.6007 228.39C33.9567 234.266 32.6667 238.71 32.6667 241.275C32.6667 243.024 33.197 244.873 36.3217 247.381C39.8907 250.248 46.097 253.215 55.5857 255.723C74.477 260.74 101.624 262.775 133 262.775L142.431 262.704C146.233 262.652 149.899 264.113 152.623 266.765C155.348 269.417 156.907 273.042 156.958 276.844C157.009 280.645 155.549 284.311 152.897 287.035C150.245 289.76 146.62 291.319 142.818 291.37L133 291.442C101.051 291.442 70.865 289.435 48.247 283.444C36.9953 280.463 26.403 276.191 18.3763 269.741C9.87667 262.919 4 253.387 4 241.275C4 229.995 9.13133 219.446 16.0973 210.616C23.178 201.658 32.9677 193.416 44.4487 186.393C67.425 172.404 98.6717 162.442 133 162.442ZM233.333 219.775C229.532 219.775 225.886 221.286 223.198 223.974C220.51 226.662 219 230.307 219 234.109C219 237.91 220.51 241.556 223.198 244.244C225.886 246.932 229.532 248.442 233.333 248.442C237.135 248.442 240.781 246.932 243.469 244.244C246.157 241.556 247.667 237.91 247.667 234.109C247.667 230.307 246.157 226.662 243.469 223.974C240.781 221.286 237.135 219.775 233.333 219.775ZM133 4.77539C152.007 4.77539 170.236 12.326 183.676 25.7661C197.116 39.2062 204.667 57.4349 204.667 76.4421C204.667 95.4492 197.116 113.678 183.676 127.118C170.236 140.558 152.007 148.109 133 148.109C113.993 148.109 95.7641 140.558 82.324 127.118C68.8839 113.678 61.3333 95.4492 61.3333 76.4421C61.3333 57.4349 68.8839 39.2062 82.324 25.7661C95.7641 12.326 113.993 4.77539 133 4.77539ZM133 33.4421C127.353 33.4421 121.762 34.5543 116.545 36.7152C111.328 38.8762 106.587 42.0435 102.594 46.0365C98.6015 50.0294 95.4341 54.7697 93.2732 59.9867C91.1122 65.2037 90 70.7952 90 76.4421C90 82.0889 91.1122 87.6804 93.2732 92.8974C95.4341 98.1144 98.6015 102.855 102.594 106.848C106.587 110.841 111.328 114.008 116.545 116.169C121.762 118.33 127.353 119.442 133 119.442C144.404 119.442 155.342 114.912 163.406 106.848C171.47 98.7836 176 87.8464 176 76.4421C176 65.0378 171.47 54.1005 163.406 46.0365C155.342 37.9724 144.404 33.4421 133 33.4421Z"
                fill="#F1F1F1"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1_16033"
                x="0"
                y="0.775391"
                width="301.818"
                height="295.153"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="2"
                  result="effect1_foregroundBlur_1_16033"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="sitting-img">
          <svg width="387" height="387" viewBox="0 0 387 387" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.25" filter="url(#filter0_f_1_16032)">
              <path d="M38.3832 231.557L39.2832 222.611L39.5532 222.629L39.8592 222.683L38.3832 231.557ZM38.3832 231.557L37.4832 240.521L37.1772 240.485L36.8892 240.431L38.3832 231.557ZM111.103 330.233L105.397 323.267L105.487 323.213L111.103 330.233ZM111.103 330.233L116.809 337.199L116.719 337.271L111.103 330.233ZM276.631 330.233L282.337 323.285L282.463 323.393L282.607 323.519L276.631 330.233ZM276.631 330.233L270.925 337.217L270.781 337.091L270.655 336.983L276.631 330.233ZM349.369 154.661V145.661H349.801L350.251 145.697L349.369 154.661ZM349.369 154.661V163.661H348.919L348.469 163.607L349.369 154.661ZM146.491 36.707C146.761 33.4433 147.139 30.1895 147.625 26.951C148.037 24.0854 148.9 21.303 150.181 18.707L166.183 26.969C166.003 27.329 165.697 28.049 165.391 29.921C165.049 31.901 164.797 34.475 164.383 38.489L146.491 36.707ZM142.963 58.361C143.179 58.091 143.827 56.993 144.529 53.141C145.367 47.6871 145.997 42.2058 146.455 36.707L164.383 38.489C163.663 45.707 163.069 51.683 162.241 56.327C161.431 60.863 160.171 65.489 157.273 69.2869L142.963 58.361ZM134.611 61.817C136.184 62.0286 137.786 61.8204 139.253 61.2135C140.719 60.6065 142 59.6224 142.963 58.361L157.291 69.269C154.401 73.0595 150.558 76.0171 146.154 77.8414C141.75 79.6656 136.941 80.2913 132.217 79.655L134.611 61.817ZM116.827 48.983C122.677 53.789 126.673 57.047 129.823 59.225C133.045 61.457 134.287 61.763 134.611 61.817L132.217 79.655C127.501 79.025 123.343 76.649 119.545 74.003C115.675 71.303 111.049 67.523 105.415 62.915L116.827 48.983ZM101.491 38.885C104.371 39.803 106.801 41.2609 109.105 42.8989C111.337 44.4829 113.875 46.571 116.827 48.983L105.415 62.915C102.301 60.359 100.285 58.721 98.6652 57.569C97.8608 56.9209 96.9625 56.3989 96.0012 56.021L101.491 38.885ZM82.5372 39.821C88.5338 37.2258 95.2681 36.8932 101.491 38.885L96.0012 56.021C93.9309 55.3653 91.6933 55.4804 89.7012 56.345L82.5372 39.821ZM68.2812 51.4129C70.9812 48.713 73.3032 46.3729 75.3552 44.5729C77.4841 42.6207 79.9079 41.017 82.5372 39.821L89.7012 56.345C89.3232 56.507 88.6392 56.885 87.1992 58.145C85.7052 59.441 83.8692 61.277 81.0072 64.139L68.2812 51.4129ZM52.2072 67.487L68.2812 51.4129L81.0072 64.139L64.9332 80.213L52.2072 67.487ZM40.6152 81.743C41.8175 79.1129 43.4273 76.6891 45.3852 74.561C47.1852 72.509 49.5252 70.187 52.2072 67.487L64.9332 80.213C62.0712 83.075 60.2532 84.911 58.9212 86.405C57.6612 87.845 57.3012 88.529 57.1392 88.907L40.6152 81.743ZM39.6792 100.697C37.6874 94.4738 38.02 87.7396 40.6152 81.743L57.1392 88.907C56.2805 90.9013 56.1719 93.1388 56.8332 95.207L39.6792 100.697ZM49.7772 116.033C47.3652 113.081 45.2772 110.543 43.6932 108.311C42.0732 106.007 40.5972 103.577 39.6792 100.697L56.8332 95.207C57.2053 96.1673 57.7212 97.0656 58.3632 97.871C60.0779 100.173 61.8606 102.424 63.7092 104.621L49.7772 116.033ZM62.6112 133.817C62.5572 133.493 62.2512 132.251 60.0192 129.029C57.8412 125.879 54.5832 121.883 49.7772 116.033L63.7092 104.621C68.3172 110.255 72.1152 114.881 74.7972 118.751C77.4432 122.531 79.8192 126.707 80.4492 131.423L62.6112 133.817ZM59.1552 142.169C60.4167 141.205 61.4008 139.925 62.0077 138.458C62.6147 136.991 62.8229 135.39 62.6112 133.817L80.4492 131.423C81.0822 136.144 80.4549 140.949 78.6308 145.35C76.8067 149.75 73.8508 153.59 70.0632 156.479L59.1552 142.169ZM37.5012 145.679C45.0432 144.923 50.1552 144.419 53.9352 143.735C57.7872 143.033 58.8852 142.385 59.1552 142.169L70.0632 156.479C66.2832 159.359 61.6572 160.619 57.1032 161.447C52.4772 162.275 46.5192 162.887 39.2832 163.607L37.5012 145.679ZM19.5012 149.387C22.0972 148.106 24.8796 147.243 27.7452 146.831C30.4452 146.381 33.7212 146.057 37.5012 145.679L39.3012 163.589C35.2692 164.003 32.6952 164.255 30.7152 164.597C29.6971 164.712 28.7019 164.979 27.7632 165.389L19.5012 149.387ZM6.77521 163.445C9.17804 157.374 13.699 152.38 19.5012 149.387L27.7632 165.389C25.8279 166.384 24.3188 168.047 23.5152 170.069L6.77521 163.445ZM4.88519 181.715C4.88519 177.917 4.88519 174.623 5.06519 171.887C5.18649 169 5.76364 166.151 6.77521 163.445L23.5152 170.069C23.3712 170.447 23.1552 171.203 23.0292 173.093C22.889 175.971 22.841 178.852 22.8852 181.733L4.88519 181.715ZM4.88519 204.467V181.715H22.8852V204.467H4.88519ZM6.77521 222.719C5.65921 219.911 5.24518 217.103 5.06519 214.277C4.88519 211.559 4.88519 208.265 4.88519 204.467H22.8852C22.8852 208.499 22.8852 211.091 23.0292 213.089C23.0382 214.116 23.202 215.135 23.5152 216.113L6.77521 222.719ZM19.5012 236.795C13.6958 233.797 9.17438 228.796 6.77521 222.719L23.5152 216.113C24.3188 218.135 25.8279 219.798 27.7632 220.793L19.5012 236.795ZM37.5012 240.503C33.7212 240.125 30.4272 239.783 27.7452 239.333C24.9552 238.883 22.2012 238.181 19.5192 236.813L27.7632 220.793C28.7017 221.204 29.6969 221.471 30.7152 221.585C32.6952 221.927 35.2692 222.179 39.2832 222.593L37.5012 240.503ZM59.1372 244.013C58.8672 243.797 57.7692 243.131 53.9172 242.447C50.1372 241.763 45.0252 241.241 37.5012 240.503L39.2832 222.593C46.5012 223.313 52.4772 223.889 57.1212 224.735C61.6572 225.545 66.2652 226.805 70.0632 229.685L59.1372 244.013ZM62.6112 252.365C62.8209 250.79 62.6099 249.188 61.9997 247.721C61.3895 246.254 60.4019 244.975 59.1372 244.013L70.0632 229.685C73.8537 232.576 76.8114 236.418 78.6356 240.822C80.4598 245.226 81.0855 250.035 80.4492 254.759L62.6112 252.365ZM49.7772 270.149C53.3392 265.936 56.7552 261.601 60.0192 257.153C62.2512 253.949 62.5572 252.689 62.6112 252.365L80.4312 254.777C79.8012 259.493 77.4252 263.633 74.7972 267.431C72.0972 271.283 68.3172 275.927 63.7092 281.543L49.7772 270.149ZM39.6792 285.485C40.6076 282.746 41.9622 280.17 43.6932 277.853C45.6403 275.222 47.6693 272.653 49.7772 270.149L63.7092 281.543C61.1532 284.675 59.5152 286.673 58.3632 288.311C57.7233 289.111 57.2075 290.003 56.8332 290.957L39.6792 285.485ZM40.6152 304.439C38.02 298.442 37.6874 291.708 39.6792 285.485L56.8332 290.957C56.1674 293.031 56.2761 295.275 57.1392 297.275L40.6152 304.439ZM52.1892 318.677C49.5072 315.995 47.1852 313.673 45.3852 311.621C43.5132 309.479 41.8212 307.229 40.6152 304.439L57.1392 297.275C57.6104 298.189 58.2173 299.027 58.9392 299.759C60.875 301.882 62.8739 303.947 64.9332 305.951L52.1892 318.677ZM68.2812 334.769L52.1892 318.677L64.9332 305.951L81.0072 322.043L68.2812 334.769ZM82.5372 346.343C79.7652 345.137 77.4972 343.463 75.3552 341.591C73.3032 339.791 70.9812 337.451 68.2812 334.751L81.0072 322.043C83.8692 324.905 85.7052 326.723 87.1992 328.037C87.9374 328.76 88.781 329.367 89.7012 329.837L82.5372 346.343ZM101.491 347.297C95.2659 349.283 88.5316 348.944 82.5372 346.343L89.7012 329.837C91.6955 330.696 93.933 330.804 96.0012 330.143L101.491 347.297ZM116.827 337.181C113.875 339.593 111.337 341.681 109.105 343.265C106.801 344.903 104.371 346.379 101.491 347.297L96.0012 330.143C96.9615 329.771 97.8598 329.255 98.6652 328.613C100.968 326.892 103.219 325.104 105.415 323.249L116.827 337.181ZM134.611 324.365C134.287 324.401 133.027 324.725 129.823 326.957C126.673 329.135 122.677 332.393 116.827 337.181L105.415 323.249C111.049 318.659 115.675 314.861 119.545 312.161C123.325 309.533 127.501 307.157 132.217 306.527L134.611 324.365ZM142.963 327.821C142 326.56 140.719 325.575 139.253 324.968C137.786 324.361 136.184 324.153 134.611 324.365L132.217 306.527C136.937 305.892 141.741 306.517 146.141 308.337C150.542 310.158 154.382 313.111 157.273 316.895L142.963 327.821ZM146.473 349.475C145.717 341.933 145.213 336.821 144.529 333.041C143.827 329.189 143.179 328.091 142.963 327.821L157.273 316.895C160.153 320.675 161.413 325.319 162.241 329.855C163.069 334.481 163.681 340.439 164.401 347.675L146.473 349.475ZM150.181 367.475C148.795 364.775 148.111 362.021 147.643 359.231C147.175 356.531 146.851 353.255 146.473 349.475L164.401 347.675C164.651 350.546 164.969 353.41 165.391 356.261C165.506 357.279 165.773 358.274 166.183 359.213L150.181 367.475ZM164.239 380.201C158.169 377.798 153.174 373.277 150.181 367.475L166.183 359.213C167.178 361.148 168.841 362.657 170.863 363.461L164.239 380.201ZM182.509 382.091C178.711 382.091 175.417 382.091 172.681 381.911C169.873 381.731 167.047 381.317 164.239 380.201L170.863 363.461C171.841 363.774 172.86 363.938 173.887 363.947C175.867 364.091 178.477 364.091 182.527 364.091L182.509 382.091ZM205.261 382.091H182.509L182.527 364.091H205.261V382.091ZM223.531 380.201C220.705 381.317 217.897 381.731 215.071 381.911C212.353 382.091 209.059 382.091 205.261 382.091V364.091C209.293 364.091 211.885 364.091 213.883 363.947C214.91 363.938 215.929 363.774 216.907 363.461L223.531 380.201ZM237.589 367.475C234.596 373.277 229.602 377.798 223.531 380.201L216.907 363.461C218.929 362.657 220.592 361.148 221.587 359.213L237.589 367.475ZM241.297 349.475C240.919 353.255 240.577 356.549 240.145 359.231C239.677 362.021 238.975 364.775 237.589 367.475L221.587 359.213C221.998 358.274 222.265 357.279 222.379 356.261C222.801 353.416 223.137 350.558 223.387 347.693L241.297 349.475ZM244.807 327.821C244.591 328.091 243.943 329.189 243.241 333.041C242.557 336.821 242.053 341.951 241.297 349.475L223.387 347.693C224.107 340.475 224.701 334.499 225.529 329.855C226.339 325.319 227.599 320.693 230.497 316.895L244.807 327.821ZM253.159 324.365C251.586 324.153 249.985 324.361 248.518 324.968C247.051 325.575 245.771 326.56 244.807 327.821L230.497 316.895C233.386 313.107 237.226 310.169 241.626 308.345C246.027 306.521 250.832 305.894 255.553 306.527L253.159 324.365ZM270.943 337.199C265.093 332.393 261.097 329.135 257.947 326.957C254.725 324.725 253.483 324.401 253.159 324.365L255.553 306.527C260.269 307.157 264.427 309.533 268.225 312.179C272.095 314.861 276.721 318.659 282.355 323.267L270.943 337.199ZM286.279 347.297C283.399 346.379 280.969 344.921 278.665 343.283C276.433 341.699 273.895 339.611 270.943 337.199L282.355 323.267C284.552 325.115 286.803 326.898 289.105 328.613C289.91 329.255 290.809 329.771 291.769 330.143L286.279 347.297ZM305.233 346.379C299.237 348.974 292.502 349.289 286.279 347.297L291.769 330.143C293.837 330.804 296.075 330.696 298.069 329.837L305.233 346.379ZM319.489 334.769C316.789 337.469 314.467 339.809 312.415 341.609C310.291 343.463 308.005 345.173 305.233 346.379L298.069 329.837C298.99 329.368 299.833 328.761 300.571 328.037C302.694 326.101 304.759 324.102 306.763 322.043L319.489 334.769ZM335.563 318.695L319.489 334.769L306.763 322.043L322.837 305.969L335.563 318.695ZM347.155 304.439C345.949 307.211 344.257 309.479 342.385 311.621C340.585 313.673 338.245 315.995 335.563 318.695L322.837 305.969C324.902 303.965 326.907 301.9 328.849 299.777C329.572 299.039 330.179 298.195 330.649 297.275L347.155 304.439ZM348.091 285.485C350.083 291.708 349.75 298.442 347.155 304.439L330.649 297.275C331.514 295.283 331.611 293.045 330.955 290.975L348.091 285.485ZM337.993 270.149C340.405 273.101 342.493 275.639 344.077 277.871C345.806 280.183 347.161 282.752 348.091 285.485L330.955 290.975C330.577 290.014 330.055 289.115 329.407 288.311C328.255 286.691 326.617 284.675 324.061 281.561L337.993 270.149ZM325.159 252.365C325.213 252.689 325.519 253.931 327.751 257.153C329.947 260.303 333.187 264.299 337.993 270.149L324.061 281.561C319.453 275.927 315.655 271.301 312.973 267.431C310.327 263.651 307.951 259.475 307.321 254.759L325.159 252.365ZM328.615 244.013C327.354 244.977 326.37 246.257 325.763 247.724C325.156 249.19 324.948 250.792 325.159 252.365L307.321 254.759C306.688 250.038 307.316 245.233 309.14 240.832C310.964 236.432 313.92 232.592 317.707 229.703L328.615 244.013ZM350.269 240.521C342.727 241.259 337.615 241.763 333.835 242.447C329.983 243.149 328.885 243.797 328.615 244.013L317.707 229.685C321.487 226.805 326.113 225.545 330.667 224.735C335.293 223.907 341.251 223.295 348.487 222.575L350.269 240.521ZM368.269 236.795C365.569 238.181 362.815 238.865 360.025 239.333C357.325 239.801 354.067 240.143 350.269 240.521L348.469 222.593C351.341 222.343 354.204 222.007 357.055 221.585C358.073 221.47 359.068 221.203 360.007 220.793L368.269 236.795ZM380.995 222.719C378.596 228.796 374.075 233.797 368.269 236.795L360.007 220.793C361.942 219.798 363.452 218.135 364.255 216.113L380.995 222.719ZM382.867 204.503C382.867 208.301 382.867 211.595 382.687 214.331C382.571 217.212 381.993 220.056 380.977 222.755L364.237 216.149C364.55 215.171 364.714 214.152 364.723 213.125C364.857 210.247 364.905 207.366 364.867 204.485L382.867 204.503ZM382.867 181.751V204.503H364.867V181.751H382.867ZM380.977 163.481C381.989 166.193 382.567 169.048 382.687 171.941C382.867 174.659 382.867 177.953 382.867 181.751H364.867C364.867 177.719 364.867 175.127 364.723 173.129C364.714 172.102 364.551 171.083 364.237 170.105L380.977 163.481ZM368.251 149.423C374.053 152.416 378.574 157.41 380.977 163.481L364.237 170.105C363.434 168.083 361.924 166.42 359.989 165.425L368.251 149.423ZM350.251 145.697C354.031 146.075 357.325 146.435 360.007 146.867C362.873 147.279 365.655 148.142 368.251 149.423L359.989 165.425C359.629 165.245 358.909 164.939 357.037 164.633C355.057 164.291 352.483 164.039 348.469 163.625L350.251 145.697ZM328.597 142.205C328.867 142.421 329.965 143.069 333.817 143.771C337.597 144.455 342.709 144.941 350.251 145.697L348.469 163.625C341.251 162.905 335.257 162.311 330.631 161.483C326.077 160.673 321.451 159.413 317.671 156.515L328.597 142.205ZM325.141 133.853C324.93 135.426 325.138 137.027 325.745 138.494C326.352 139.961 327.336 141.241 328.597 142.205L317.671 156.515C313.887 153.624 310.934 149.783 309.114 145.383C307.293 140.982 306.668 136.161 307.303 131.441L325.141 133.853ZM337.975 116.051C333.169 121.919 329.911 125.915 327.715 129.065C325.483 132.287 325.195 133.529 325.141 133.853L307.303 131.441C307.933 126.725 310.309 122.585 312.955 118.787C315.637 114.917 319.435 110.291 324.043 104.657L337.975 116.051ZM348.073 100.715C347.173 103.595 345.697 106.043 344.059 108.347C342.475 110.561 340.387 113.117 337.975 116.051L324.043 104.657C325.892 102.454 327.675 100.197 329.389 97.889C330.036 97.0901 330.558 96.198 330.937 95.243L348.073 100.715ZM347.137 81.779C349.728 87.7703 350.06 94.4973 348.073 100.715L330.937 95.243C331.593 93.1726 331.478 90.9351 330.613 88.9429L347.137 81.779ZM335.545 67.5229C338.245 70.2049 340.585 72.527 342.385 74.597C344.337 76.726 345.941 79.1498 347.137 81.779L330.613 88.9429C330.142 88.0288 329.535 87.1734 328.813 86.4409C326.885 84.3106 324.886 82.2455 322.819 80.249L335.545 67.5229ZM319.471 51.431L335.545 67.5229L322.819 80.249L306.745 64.157L319.471 51.431ZM305.215 39.857C307.844 41.0545 310.267 42.6581 312.397 44.609C314.449 46.409 316.789 48.731 319.471 51.431L306.745 64.157C303.883 61.313 302.047 59.477 300.553 58.1629C299.113 56.903 298.429 56.543 298.051 56.363L305.215 39.857ZM286.261 38.903C292.486 36.9169 299.221 37.2559 305.215 39.857L298.051 56.363C296.059 55.4984 293.822 55.4013 291.751 56.057L286.261 38.903ZM270.925 49.019C273.877 46.607 276.415 44.519 278.647 42.935C280.957 41.1986 283.527 39.8378 286.261 38.903L291.751 56.057C290.791 56.4294 289.893 56.9452 289.087 57.587C287.467 58.757 285.451 60.395 282.319 62.951L270.925 49.019ZM253.141 61.853C253.465 61.799 254.707 61.493 257.929 59.261C262.378 55.9914 266.712 52.5874 270.925 49.019L282.319 62.951C276.703 67.559 272.059 71.357 268.207 74.039C264.427 76.667 260.251 79.043 255.535 79.6909L253.141 61.853ZM244.789 58.379C245.751 59.6437 247.03 60.6313 248.497 61.2415C249.964 61.8516 251.566 62.0626 253.141 61.853L255.535 79.6909C250.813 80.3293 246.005 79.6884 241.601 77.8674C237.197 76.0464 233.354 73.0922 230.461 69.305L244.789 58.379ZM241.279 36.743C242.035 44.267 242.539 49.397 243.223 53.159C243.925 57.011 244.573 58.109 244.789 58.379L230.461 69.305C227.581 65.525 226.321 60.899 225.511 56.345C224.683 51.719 224.071 45.761 223.351 38.525L241.279 36.743ZM237.571 18.743C238.957 21.443 239.659 24.197 240.127 26.9869C240.577 29.687 240.901 32.945 241.279 36.743L223.369 38.543C223.12 35.6715 222.783 32.8082 222.361 29.957C222.248 28.9386 221.981 27.9433 221.569 27.005L237.571 18.743ZM223.495 6.01695C229.575 8.42058 234.577 12.9308 237.571 18.743L221.569 27.005C220.574 25.0697 218.911 23.5606 216.889 22.757L223.495 6.01695ZM205.243 4.12695C209.041 4.12695 212.335 4.12695 215.071 4.30695C217.952 4.42345 220.797 5.00076 223.495 6.01695L216.889 22.757C215.911 22.4435 214.892 22.2796 213.865 22.271C211.885 22.127 209.275 22.127 205.225 22.127L205.243 4.12695ZM182.491 4.12695H205.243V22.127H182.491V4.12695ZM164.221 6.01695C166.933 5.0044 169.789 4.42727 172.681 4.30695C175.399 4.12695 178.693 4.12695 182.491 4.12695V22.127C178.459 22.127 175.867 22.127 173.869 22.271C172.843 22.2855 171.824 22.4492 170.845 22.757L164.221 6.01695ZM150.163 18.743C153.161 12.9376 158.162 8.41612 164.239 6.01695L170.845 22.757C168.823 23.5606 167.16 25.0697 166.165 27.005L150.163 18.743ZM130.867 193.109C130.867 209.818 137.505 225.842 149.319 237.657C161.134 249.471 177.159 256.109 193.867 256.109V274.109C172.385 274.109 151.782 265.575 136.592 250.385C121.401 235.194 112.867 214.591 112.867 193.109H130.867ZM193.867 130.109C177.159 130.109 161.134 136.746 149.319 148.561C137.505 160.376 130.867 176.4 130.867 193.109H112.867C112.867 171.626 121.401 151.024 136.592 135.833C151.782 120.643 172.385 112.109 193.867 112.109V130.109ZM256.867 193.109C256.867 176.4 250.23 160.376 238.415 148.561C226.6 136.746 210.576 130.109 193.867 130.109V112.109C215.35 112.109 235.952 120.643 251.143 135.833C266.333 151.024 274.867 171.626 274.867 193.109H256.867ZM193.867 256.109C210.576 256.109 226.6 249.471 238.415 237.657C250.23 225.842 256.867 209.818 256.867 193.109H274.867C274.867 214.591 266.333 235.194 251.143 250.385C235.952 265.575 215.35 274.109 193.867 274.109V256.109Z" fill="#F1F1F1" />
            </g>
            <defs>
              <filter id="filter0_f_1_16032" x="0.884766" y="0.126953" width="385.982" height="385.964" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_1_16032" />
              </filter>
            </defs>
          </svg>

        </div>
      </div>

      <div className="login-form">
        
        <div className="logo-form">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group-form">
            <div className="login-input">
              <label>اسم المستخدم</label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="login-input">
              <label>كلمة المرور</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <a  className="ne-forget-password" href="/">نسيت كلمة المرور؟</a>

          </div>
          <div className="HJ_ErrorLogin">
            {(error !== "") && <span style={{ color: "red" }}>{error}</span>}
          </div>
          <div className="ne-actions">
            <button type="submit" className="login-button">
              تسجيل دخول
            </button>
            <button type="button" className="cancel-button">
              إلغاء
            </button>
          </div>
        </form>
        <div className='HJ_Footer_login'>
          <img src={focalX} alt='focal' className='MA_IMG_focal' />
          <span>Siria Herbs 2023 © All Rights Reserved | Designed and Developed by</span>
        </div>
      </div>
    </div>
    
  );
};

export default Login;
