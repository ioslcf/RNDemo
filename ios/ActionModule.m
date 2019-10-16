//
//  ActionModule.m
//  RNDemo
//
//  Created by 刘成飞 on 2019/10/16.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "ActionModule.h"
#import <UIKit/UIKit.h>

@implementation ActionModule

RCT_EXPORT_MODULE();

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(saveImageWithImagePath: (NSString *)imagePath) {
  imagePath = [imagePath stringByReplacingOccurrencesOfString:@"file:///" withString:@"/"];

  //todotest delete
  [self loadImageFinished:[UIImage imageWithContentsOfFile:imagePath]];

  
}

- (void)loadImageFinished:(UIImage *)image
{
  UIImageWriteToSavedPhotosAlbum(image, self, @selector(image:didFinishSavingWithError:contextInfo:), (__bridge void *)self);
}

- (void)image:(UIImage *)image didFinishSavingWithError:(NSError *)error contextInfo:(void *)contextInfo
{

  NSLog(@"image = %@, error = %@, contextInfo = %@", image, error, contextInfo);
}

@end
