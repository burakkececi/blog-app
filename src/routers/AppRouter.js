import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Core/Header'
import HomePage from '../components/Core/HomePage'
import BlogPage from '../components/Blog/BlogsPage'
import BlogDetailsPage from '../components/Blog/BlogDetailsPage'
import AddBlogItem from '../components/Blog/BlogActions/AddBlogItem'
import AboutPage from '../components/Core/AboutPage'
import NotFoundPage from '../components/Core/NotFoundPage'
import Footer from '../components/Core/Footer'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/blogs' element={<BlogPage />} />
        <Route path='/blogs/:id' element={<BlogDetailsPage />} />
        <Route path='/create' element={<AddBlogItem />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter