import React from 'react'
import TodoPageContextProvider from '../../contexts/TodoPageContext/TodoPageContext'
import TodoPageController from '../checklist/TodoPage/TodoPageController'

export default function AppUI() {
    return (
        <TodoPageContextProvider>
            <TodoPageController />
        </TodoPageContextProvider>
    )
}
