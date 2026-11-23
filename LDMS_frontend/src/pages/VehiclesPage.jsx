import {
  useState,
  useEffect
}
  from "react";

import DashboardLayout
  from "../layouts/DashboardLayout";

import {
  getVehicles,
  createVehicle
}
  from "../services/vehicleService";

function VehiclesPage() {

  const [vehicles,
    setVehicles] =
    useState([]);

  const [form,
    setForm] =
    useState({

      vehicleNumber: "",
      vehicleType: "",
      manufacturer: "",
      capacityKg: "",
      fuelType: "Diesel"
    });

  const loadVehicles =
    async () => {

      const data =
        await getVehicles();

      setVehicles(data);
    };

  useEffect(() => {

    loadVehicles();

  }, []);

  const submitHandler =
    async (e) => {

      e.preventDefault();

      await createVehicle(form);

      loadVehicles();
    };

  return (

    <DashboardLayout>

      <div className="vehicle-page-header">

        <h1>
          Vehicle Management
        </h1>

        <p>
          Manage fleet resources and vehicle availability
        </p>

      </div>


      <div className="vehicle-stats">

        <div className="vehicle-stat-card">
          <h3>Total Vehicles</h3>
          <h2>{vehicles.length}</h2>
        </div>

        <div className="vehicle-stat-card">
          <h3>Available</h3>
          <h2>
            {
              vehicles.filter(
                v => v.status === "AVAILABLE"
              ).length
            }
          </h2>
        </div>

        <div className="vehicle-stat-card">
          <h3>Assigned</h3>
          <h2>
            {
              vehicles.filter(
                v => v.status === "ASSIGNED"
              ).length
            }
          </h2>
        </div>

      </div>


      <form
        onSubmit={submitHandler}
        className="vehicle-form"
      >

        <input
          placeholder="Vehicle Number"
          onChange={(e) =>
            setForm({
              ...form,
              vehicleNumber:
                e.target.value
            })}
        />

        <input
          placeholder="Type"
          onChange={(e) =>
            setForm({
              ...form,
              vehicleType:
                e.target.value
            })}
        />

        <input
          placeholder="Manufacturer"
          onChange={(e) =>
            setForm({
              ...form,
              manufacturer:
                e.target.value
            })}
        />

        <input
          placeholder="Capacity Kg"
          onChange={(e) =>
            setForm({
              ...form,
              capacityKg:
                e.target.value
            })}
        />

        <button>
          Create Vehicle
        </button>

      </form>

      <br />

      <table>

        <thead>

          <tr>

            <th>
              Vehicle No
            </th>

            <th>
              Type
            </th>

            <th>
              Capacity
            </th>

            <th>
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {vehicles.map(
            vehicle => (
              <tr
                key={vehicle._id}
              >

                <td>

                  <span className="vehicle-number-badge">

                    {vehicle.vehicleNumber}

                  </span>

                </td>

                <td>
                  {vehicle.vehicleType}
                </td>

                <td>
                  {vehicle.capacityKg}
                </td>

                <td>

                  <span
                    className={`vehicle-status
${vehicle.status === "AVAILABLE"
                        ? "vehicle-available"

                        : vehicle.status === "ASSIGNED"
                          ? "vehicle-assigned"

                          : vehicle.status === "MAINTENANCE"
                            ? "vehicle-maintenance"

                            : "vehicle-inactive"
                      }`}
                  >

                    {vehicle.status}

                  </span>

                </td>

              </tr>
            ))}

        </tbody>

      </table>

    </DashboardLayout>
  );
}

export default VehiclesPage;