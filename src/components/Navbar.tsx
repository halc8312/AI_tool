import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { RootState } from '../store';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              AI Tools Showcase
            </Link>
          </div>
          <div className="flex">
            {user ? (
              <>
                <Link to="/add-tool" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium">
                  ツールを追加
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  ログアウト
                </button>
              </>
            ) : (
              <Link to="/auth" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium">
                ログイン / 登録
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;