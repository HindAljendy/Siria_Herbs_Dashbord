import React, { useState, useEffect } from "react";
import "./Policy.css";

import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Policy {
  id?: number;
  policy_number: string;
  title: string;
  description: string;
  icon: string;
}

const Policy = () => {
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newPolicy, setNewPolicy] = useState<Policy>({
    policy_number: "",
    title: "",
    description: "",
    icon: "",
  });
  const [showadd, SetShowAdd] = useState(true);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/policy")
      .then((response) => {
        setPolicies(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id: number | undefined) => {

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    };
    axios
      .delete(`http://127.0.0.1:8000/api/policy/${id}`, config)
      .then((response) => {
        console.log(response);
        console.log(`Policy with ID ${id} deleted`);
        setPolicies((prevPolicies) =>
          prevPolicies.filter((policy) => policy.id !== id)
        );
      })
      .catch((error) => {
        if (error.response.status === 401) {
          navigate('/login');
        } else {
          console.error('Error!', error);
        }
      });
  };

  const handleAddPolicy = () => {
    setShowModal(true);
    SetShowAdd(false);
    setNewPolicy({
      policy_number: "",
      title: "",
      description: "",
      icon: "",
    });
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("policy_number", newPolicy.policy_number);
    formData.append("title", newPolicy.title);
    formData.append("description", newPolicy.description);
    const fileInput = document.getElementById("file-input") as HTMLInputElement;

    const file = fileInput.files![0];

    formData.append("icon", file);
    console.log("formdata:", formData);

    axios
      .post("http://127.0.0.1:8000/api/policy", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Accept': "application/json",
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response);
        console.log("Policy added successfully");
        setPolicies([...policies, response.data]);
        setShowModal(false);
        window.location.reload();
      })
      .catch((error) => {
        if (error.response.status === 401) {
          navigate('/login');
        } else {
          console.error('Error!', error);
        }
      });
  };

  const handleSave = (id: number, updatedPolicy: Policy, index: number) => {
    const formData = new FormData();
    formData.append("_method", "PUT");
    formData.append("policy_number", updatedPolicy.policy_number);
    formData.append("title", updatedPolicy.title);
    formData.append("description", updatedPolicy.description);

    // Ensure the correct file input ID
    const fileInput = document.getElementById(
      `file-input_${index}`
    ) as HTMLInputElement;

    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      formData.append("icon", fileInput.files[0]);
    }

    console.log("FormData contents:");
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    axios
      .post(`http://127.0.0.1:8000/api/policy/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Accept': "application/json",
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response);
        console.log(`Policy with ID ${id} updated`);
        setPolicies((prevPolicies) =>
          prevPolicies.map((policy) =>
            policy.id === id ? { ...policy, ...updatedPolicy } : policy
          )
        );
      })
      .catch((error) => {
        console.error("Error updating policy:", error);
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        }
        if (error.response.status === 401) {
          navigate('/login');
        } else {
          console.error('Error!', error);
        }
      });
  };

  return (
    <div className="ne-policy_container">
      {policies.map((policy, index) => (
        <div key={policy.id} className="ne-policy">
          <div className="ne-delet-btn" onClick={() => handleDelete(policy.id)}>
            <h1 className="ne-delete-policy-icon d-flex justify-center align-center">
              <span>-</span>حذف السياسة
            </h1>
          </div>
          <form action="" >
            <div className="ne-form-group">
              <div className="ne-input-group">
                <label
                  htmlFor={`policy_number_${index}`}
                  className="ne-policy-label"
                >
                  رقم السياسة
                </label>
                <input
                  type="text"
                  id={`policy_number_${index}`}
                  value={policy.policy_number}
                  onChange={(event) => {
                    const newPolicies = [...policies];

                    newPolicies[index].policy_number = event.target.value;

                    setPolicies(newPolicies);
                  }}
                />
              </div>
              <div className="ne-input-group-icon">
                <h2 className="ne-policy-label">ايقونة السياسة</h2>
                <div className="ne-icon-container">
                  <label
                    htmlFor={`file-input_${index}`}
                    className="button ne-choose_file"
                  >
                    <span className="">اختار ملف</span>
                    <input
                      type="file"
                      id={`file-input_${index}`}
                      style={{ display: "none" }}
                      onChange={(event) => {
                        const files = event.target.files;

                        if (files && files.length > 0) {
                          const updatedPolicies = [...policies];
                          updatedPolicies[index].icon = URL.createObjectURL(
                            files[0]
                          );
                          setPolicies(updatedPolicies);
                          // setNewPolicy({
                          //   ...newPolicy,

                          //   icon: files[0].name,
                          // });
                        }
                      }}
                    />
                  </label>
                  <div className="input-container">
                    <input
                      type="text"
                      placeholder="اسم الملف"
                      id={`file-input_${index}`}
                    //   value={policy.icon}
                    />

                    <div className=" ne-img-icon">
                      <img src={policy.icon} alt="delete Button" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ne-input-group">
              <label
                htmlFor={`policy_title_${index}`}
                className="ne-policy-label"
              >
                عنوان السياسة
              </label>
              <input
                type="text"
                id={`policy_title_${index}`}
                value={policy.title}
                onChange={(event) => {
                  const newPolicies = [...policies];

                  newPolicies[index].title = event.target.value;

                  setPolicies(newPolicies);
                }}
              />
            </div>
            <div className="ne-input-group ne-policy_description">
              <label
                htmlFor={`policy_description_${index}`}
                className="ne-policy-label"
              >
                وصف السياسة
              </label>
              <textarea
                name=""
                id={`policy_description_${index}`}
                placeholder="اكتب وصف السياسة هنا"
                value={policy.description}
                onChange={(event) => {
                  const newPolicies = [...policies];

                  newPolicies[index].description = event.target.value;

                  setPolicies(newPolicies);
                }}
              ></textarea>
            </div>
          </form>
          <button
            className="ne-save-btn"
            onClick={() =>
              handleSave(
                policy.id!,
                {
                  policy_number: policy.policy_number,

                  title: policy.title,

                  description: policy.description,

                  icon: policy.icon,
                },
                index
              )
            }
          >
            حفظ
          </button>
        </div>
      ))}
      {showadd && (
        <div className="ne-add-policy" onClick={handleAddPolicy}>
          <h1>
            <span>+</span>اضافة سياسة جديدة
          </h1>
        </div>
      )}
      {showModal && (
        <div className="ne-policy">
          <div className="ne-delet-btn" onClick={handleModalClose}>
            <h1 className="ne-delete-policy-icon d-flex justify-center align-center">
              <span>-</span>حذف السياسة
            </h1>
          </div>
          <form onSubmit={handleFormSubmit}>
            <div className="ne-form-group">
              <div className="ne-input-group">
                <label htmlFor="policy_number" className="ne-policy-label">
                  رقم السياسة
                </label>
                <input
                  type="text"
                  id="policy_number"
                  value={newPolicy.policy_number}
                  onChange={(event) =>
                    setNewPolicy({
                      ...newPolicy,
                      policy_number: event.target.value,
                    })
                  }
                />
              </div>
              <div className="ne-input-group-icon">
                <label htmlFor="policy_number" className="ne-policy-label">
                  ايقونة السياسة
                </label>
                <div className="ne-icon-container">
                  <label htmlFor="file-input" className="button ne-choose_file">
                    <span>اختار ملف</span>
                    <input
                      type="file"
                      id="file-input"
                      style={{ display: "none" }}
                      onChange={(event) => {
                        const files = event.target.files;

                        if (files) {
                          setNewPolicy({
                            ...newPolicy,

                            icon: files[0].name,
                          });
                        }
                      }}
                    />
                  </label>
                  <div className="input-container">
                    <input
                      type="text"
                      placeholder="اسم الملف"
                      id="file-input"
                    // value={newPolicy.icon}
                    />

                    <div className=" ne-img-icon">
                      <img src={newPolicy.icon} alt="delete Button" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ne-input-group">
              <label htmlFor="policy_title" className="ne-policy-label">
                عنوان السياسة
              </label>
              <input
                type="text"
                id="policy_title"
                value={newPolicy.title}
                onChange={(event) =>
                  setNewPolicy({
                    ...newPolicy,
                    title: event.target.value,
                  })
                }
              />
            </div>
            <div className="ne-input-group ne-policy_description">
              <label htmlFor="policy_description" className="ne-policy-label">
                وصف السياسة
              </label>
              <textarea
                name=""
                id="policy_description"
                placeholder="اكتب وصف السياسة هنا"
                value={newPolicy.description}
                onChange={(event) =>
                  setNewPolicy({
                    ...newPolicy,
                    description: event.target.value,
                  })
                }
              ></textarea>
            </div>

            <div className="HJ_Btn_save">
              <button className="ne-save-btn" type="submit">
                حفظ
              </button>
            </div>

          </form>
        </div>
      )}
    </div>
  );
};

export default Policy;
