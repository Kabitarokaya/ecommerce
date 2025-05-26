import React, { useContext } from 'react';
// import CartContext from '../../Component/CartContext'; 

function page() {
  //   let { state, dispatch } = useContext(CartContext);

  return (
    <>
      <section className="py-5">
        <div className="container mx-auto">
          <div className="w-[1000px] shadow-lg mx-auto border">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100 whitespace-nowrap">
                  <tr>
                    <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                      Id
                    </th>
                    <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                      Product Title
                    </th>
                    <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                      Product Image
                    </th>
                    <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>

                {/* <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
                  {state.cart.map((a) => (
                    <tr key={a.id}>
                      <td className="px-4 py-4 text-sm text-slate-900 font-medium">{a.id}</td>
                      <td className="px-4 py-4 text-sm text-slate-600 font-medium">{a.title}</td>
                      <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                        <img width="100px" src={a.thumbnail} alt="" />
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                        <button onClick={() => dispatch({ type: 'remove', payload: a })}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody> */}
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
