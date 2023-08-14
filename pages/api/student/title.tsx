import type { NextApiRequest, NextApiResponse } from "next";
import {PrismaClient, Prisma} from '@prisma/client';

const prisma = new PrismaClient();
export default async function handler(req:NextApiRequest,res:NextApiResponse) {
    const {id,title,description,groupMember}=req.body
    try{
        await prisma.projectTitle.create({
            data: {
                 id,
                title,
                description,
                groupMember,
                
            }
            })
            res.status(200).json({message:'your project titles are submitted'})
        }
        catch(error){
            console.log("failure");             
        }
    }


